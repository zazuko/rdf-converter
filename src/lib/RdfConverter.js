import { css, html, LitElement, render } from "lit";
import "@vaadin/vaadin-app-layout/vaadin-app-layout.js";
import "@vaadin/vaadin-split-layout/vaadin-split-layout.js";
import "@rdfjs-elements/rdf-editor/rdf-editor.js";
import "@rdfjs-elements/rdf-snippet/rdf-snippet.js";
import "@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js";
import "@vaadin/vaadin-form-layout/vaadin-form-layout.js";
import "@vaadin/vaadin-lumo-styles/typography";
import "@vaadin/vaadin-button/vaadin-button.js";
import TermSet from "@rdf-esm/term-set";
import copy from "clipboard-copy";
import { InputController } from "./InputController.js";
import { OutputController } from "./OutputController.js";
import { extractPrefix } from "./prefixes.js";

export class RdfConverter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100vh;
      }

      vaadin-app-layout {
        display: flex;
        flex-flow: column;
      }

      vaadin-split-layout {
        height: 100%;
      }

      rdf-editor,
      rdf-snippet {
        flex: 1;
      }

      vaadin-form-layout {
        margin: 0 20px;
      }

      section {
        display: flex;
        flex-direction: column;
      }

      section header {
        position: sticky;
        top: 0;
        background: white;
        z-index: 100;
        display: flex;
        align-items: baseline;
        padding: 0 10px;
      }

      span.manual {
        font-size: small;
        padding-left: 10px;
      }

      span.error {
        color: red;
      }

      span.manual a {
        text-decoration: none;
        color: inherit;
      }
    `;
  }

  static get properties() {
    return {
      sharingLink: { type: String },
      sharingDialogOpen: { type: Boolean }
    };
  }

  get prefixes() {
    return this.renderRoot.querySelector("prefixes-menu");
  }

  constructor() {
    super();
    this.input = new InputController(this);
    this.output = new OutputController(this);
  }

  connectedCallback() {
    super.connectedCallback();
    import("./components/input-format.js");
    import("./components/external-input.js");
    import("./components/prefixes-menu.js");
    import("@vaadin/vaadin-icons/vaadin-icons.js");
    import("@polymer/iron-icon/iron-icon.js");
  }

  render() {
    return html`
      <vaadin-app-layout>
        <vaadin-drawer-toggle
          slot="navbar [touch-optimized]"
        ></vaadin-drawer-toggle>
        <div slot="navbar" style="flex: 1"></div>
        <vaadin-button
          class="navbar"
          slot="navbar [touch-optimized]"
          title="Share"
          @click="${this.__openSharingDialog}"
        >
          <iron-icon icon="vaadin:connect"></iron-icon>
        </vaadin-button>

        <vaadin-form-layout slot="drawer">
          <input-format
            .selected="${this.input.format}"
            @selected-changed="${e => this.input.setFormat(e.detail.value)}"
          ></input-format>

          <external-input
            @import-url="${e => this.input.loadInput(e.detail.value)}"
            @load-sample="${this.__prepareSample}"
          ></external-input>

          <prefixes-menu
            .prefixes="${this.output.prefixes}"
            .customPrefixes="${this.output.customPrefixes}"
            @prefix-selected="${e => this.output.addPrefix(e.detail.value)}"
            @prefix-unselected="${e =>
              this.output.removePrefix(e.detail.value)}"
            @custom-prefix-set="${e =>
              this.output.setCustomPrefix(e.detail.prefix, e.detail.namespace)}"
            @change="${this.__manualParse}"
          ></prefixes-menu>
        </vaadin-form-layout>

        <vaadin-split-layout>
          <section id="input" style="width: 50%">
            <header>
              <h2>
                Input
              </h2>
              <span class="manual error" ?hidden="${!this.input.hasError}">
                Parsing failed
                <a href="#" @click="${this.__manualParse}" title="Parse again"
                  >⟳</a
                >
              </span>
            </header>

            <rdf-editor
              .value="${this.input.value}"
              .format="${this.input.format}"
              auto-parse
              no-reserialize
              @quads-changed="${this.__updateOutput}"
              @parsing-failed="${this.__parsingFailed}"
              @prefixes-parsed="${this.__setPrefixes}"
            ></rdf-editor>
          </section>

          <section id="output" style="width: 50%">
            <header>
              <h2>Output</h2>
            </header>
            <rdf-snippet
              only-output
              formats="text/turtle,application/ld+json,application/trig,application/rdf+xml"
              .inputFormat="${this.input.format}"
              .input="${this.output.value}"
              .prefixes="${this.output.prefixes.join(",")}"
              .customPrefixes="${this.output.customPrefixes}"
            ></rdf-snippet>
          </section>
        </vaadin-split-layout>
      </vaadin-app-layout>

      <vaadin-dialog
        ?opened="${this.sharingDialogOpen}"
        .renderer="${this.__renderSharingDialog(this)}"
        @opened-changed="${e => {
          this.sharingDialogOpen = e.detail.value;
        }}"
      >
      </vaadin-dialog>
    `;
  }

  __updateOutput(e) {
    this.input.hasError = false;
    this.output.updateValue(e.target.value);
  }

  __parsingFailed() {
    if (this.input.format) {
      this.input.hasError = true;
    }
  }

  get __inputEditor() {
    return this.renderRoot.querySelector("rdf-editor");
  }

  __manualParse() {
    this.__inputEditor.parse();
  }

  __setPrefixes(e) {
    if (this.prefixes.copyFromInput) {
      this.output.setPrefixes(e.detail.prefixes);
    }
    if (this.prefixes.extractKnown) {
      const uniqueTerms = new TermSet();

      for (const { subject, predicate, object, graph } of this.__inputEditor
        .quads) {
        for (const term of [subject, predicate, object, graph]) {
          if (!uniqueTerms.has(term)) {
            const prefix = extractPrefix(term);
            if (prefix) {
              this.output.addPrefix(prefix);
            }
          }

          uniqueTerms.add(term);
        }
      }
    }
  }

  __prepareSample() {
    this.prefixes.copyFromInput = false;
    this.output.setCustomPrefix("person", "http://localhost:8080/data/person/");
    this.input.loadSample();
  }

  async __openSharingDialog() {
    await import("@vaadin/vaadin-dialog/vaadin-dialog.js");
    this.sharingDialogOpen = true;
    this.sharingLinkShortened = false;
    this.sharingLink = this.__getSharingLink();
  }

  __getSharingLink() {
    const { value } = this.__inputEditor;
    const { format } = this.input;

    const params = new URLSearchParams({
      value,
      format
    });

    const url = new URL(document.location);
    url.hash = params.toString();
    return url.toString();
  }

  async __shortenSharingLink() {
    if (this.sharingLinkShortened) {
      return;
    }

    this.sharingLinkShortened = true;
    const shortnenerUrl = "https://s.zazuko.com/api/v1/shorten";
    const body = new URLSearchParams({
      url: this.sharingLink
    });
    const response = await fetch(shortnenerUrl, {
      method: "POST",
      body
    });

    this.sharingLink = await response.text();
  }

  // eslint-disable-next-line class-methods-use-this
  __renderSharingDialog(parent) {
    /* eslint-disable lit/no-template-bind */
    return root => {
      let dialogContents;
      if (!root.firstElementChild) {
        dialogContents = document.createElement("div");
        root.appendChild(dialogContents);
      } else {
        dialogContents = root.firstElementChild;
      }

      render(
        html`
          <vaadin-text-field
            style="width:500px"
            readonly
            autoselect
            label="Copy this URL to share playground"
            .value="${parent.sharingLink}"
          ></vaadin-text-field>
          <br />
          <vaadin-button
            ?disabled="${parent.sharingLinkShortened}"
            @click="${parent.__shortenSharingLink.bind(parent)}"
          >
            Shorten
          </vaadin-button>
          <vaadin-button @click="${parent.__copySharingLink.bind(parent)}">
            <iron-icon icon="vaadin:copy"></iron-icon>
          </vaadin-button>
        `,
        dialogContents
      );

      dialogContents.querySelector("vaadin-text-field")?.focus();
    };
  }

  __copySharingLink() {
    copy(this.sharingLink);
  }
}
