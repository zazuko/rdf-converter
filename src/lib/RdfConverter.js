import { css, html, LitElement, render } from "lit";
import TermSet from "@rdfjs/term-set";
import copy from "clipboard-copy";
import { InputController } from "./InputController.js";
import { OutputController } from "./OutputController.js";
import { extractPrefix } from "./prefixes.js";
import Package from "../../package.json";
import "@vaadin/vaadin-app-layout/vaadin-app-layout.js";
import "@vaadin/vaadin-split-layout/vaadin-split-layout.js";
import "@rdfjs-elements/rdf-editor/rdf-editor.js";
import "@rdfjs-elements/rdf-snippet/rdf-snippet.js";
import "@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js";
import "@vaadin/vaadin-form-layout/vaadin-form-layout.js";
import "@vaadin/vaadin-lumo-styles/typography.js";
import "@vaadin/vaadin-button/vaadin-button.js";

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

      [role="button"][slot="navbar"] {
        margin-right: 10px;
      }

      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .title h1 {
        font-size: 1em;
      }

      .title span {
        margin: 0 5px;
      }

      .title a {
        width: 75px;
      }
    `;
  }

  static get properties() {
    return {
      sharingLink: { type: String },
      sharingDialogOpen: { type: Boolean },
    };
  }

  get prefixes() {
    return this.renderRoot.querySelector("prefixes-menu");
  }

  constructor() {
    super();
    this.input = new InputController(this);
    this.output = new OutputController(this);

    const url = new URL(document.location);
    url.hash = "";
    window.history.replaceState(null, "", url.toString());
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
        <div class="title" slot="navbar">
          <h1>RDF Converter</h1>
          <span>by</span>
          <a
            href="https://zazuko.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="h-6"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="1.41421"
              viewBox="0 0 768 260"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m2137 3767c1-1-44-1-42-1h240c6-2 12-7 12-14s-5-13-12-14h-195c-35 0-63-29-63-64 0-31 23-57 53-62 2-1-14-1-13-1h223c7-1 12-7 12-14 0-8-7-14-15-14-80 0-161 2-242 2-16 0-27-17-31-30-21-62-34-144-80-190-121-121-165-296-94-456 66-149 211-240 374-241 336-3 529 388 328 654 16 21 25 47 25 74 0 65-53 119-118 119-66 0-119-54-119-119 0-66 53-119 119-119 19 0 37 5 53 13 175-233 5-574-287-571-143 1-270 80-329 211-62 140-23 293 84 399 56 56 66 131 90 204v1h227c35 0 64 28 64 63 0 31-23 58-53 63-2 0-32 0-34 0h29c-2 0-4 0-6 0h-199c-7 2-12 8-12 14 0 7 5 13 12 14h194c35 0 64 29 64 64 0 31-23 57-54 62-1 1 27 1 25 1h-29c-2 0-4 0-6 0h-188c-6 1-11 7-11 14 0 8 6 14 14 14 21 0 73-1 94 0 206 15 363-55 512-199 135-131 211-315 211-502 0-69-10-136-29-200h-1c-25-86-67-167-123-238h-2c-85-108-201-190-335-233v-3l-1 2c-34-11-69-19-105-24-3 11-8 22-15 33-37 54-110 69-165 33-23-16-40-39-48-65-333 56-587 346-587 695 0 89 17 178 50 261 14-7 30-10 46-10 66 0 119 53 119 119 0 65-53 118-119 118-65 0-118-53-118-118 0-30 10-58 30-80-38-92-58-190-58-290 0-374 273-685 631-744 0-2 1-5 1-7h2c3-15 9-30 18-44 36-54 110-69 165-33 29 20 47 50 51 82 43 6 85 17 126 30v1c77 26 149 64 213 112v-1c70 53 129 115 176 186h1c80 120 126 263 126 418 0 237-111 459-301 603-205 141-324 151-565 147-35 0-64-28-64-63 0-31 23-58 54-62zm183-1327v-1c1-1 1-2 1-3l1-1v-1-1-1l1-1v-1-1l1-2v-1-1-1-1-1l1-1v-1c0-1 0-2 0-3v-1-1-1-1-1-1-1-1-1-1-1-1l-1-1v-1-1-2-1l-1-2v-1-1l-1-1v-1-1-1h-1v-1c-5-14-14-27-28-36-32-22-77-13-99 20-3 5-6 11-8 17v2h-1v3h-1v5h-1v23l1 1v4l1 1v3l1 1v2l1 1v2l1 1c5 13 14 24 26 32 33 22 77 13 99-19 3-5 5-9 7-13zm234 910c-7-7-15-13-23-18-10-5-21-7-32-7-39 0-71 32-71 71s31 71 71 71c39 0 71-32 71-71 0-17-6-33-16-46zm-905 233c40 0 71-32 71-71 0-40-31-72-71-72-39 0-71 32-71 72 0 39 32 71 71 71z"
                transform="matrix(.14637844056 0 0 .14637844056 -192.39293319 -322.90052908)"
              />
              <g fill="#ff441c">
                <path
                  d="m3509 3401.22c-4 5-6 10-6 17 0 3 1 6 2 10l6 9c2 2 5 4 8 5s7 2 11 2h417c7 0 13-2 18-7 5-6 8-12 8-20s-3-13-8-19c-5-5-11-7-18-7h-343c-4 0-7-2-8-5s-1-7 1-9l371-443c4-5 6-11 6-18 0-3-1-6-2-9s-4-7-6-9-5-4-8-6c-4-1-7-2-11-2h-417c-8 0-13 3-18 8-6 5-8 11-8 18 0 8 2 14 8 20 5 5 10 8 18 8h342c3 0 6 1 8 4 1 3 1 7-2 9z"
                  transform="matrix(.12790089092 0 0 .12790089092 -128.22109287 -266.58431113)"
                />
                <path
                  d="m4479 3418.22c0 7 2 13 7 18 6 6 12 8 20 8 7 0 13-2 18-8 6-5 8-11 8-18v-251c0-77-27-142-81-196s-119-81-196-81-142 27-196 81c-54 55-81 119-81 196s27 142 81 196 119 81 196 81c32 0 63-5 93-16 29-10 56-26 81-45l36-29c2-2 6-3 9-1 3 1 5 4 5 7zm-224-474c30 0 60 5 88 17 26 12 50 28 70 49 21 20 37 44 48 70 12 28 18 57 18 87s-6 59-18 87c-11 26-27 50-48 70-20 21-44 37-71 49s-57 18-87 18-60-6-88-18c-27-12-50-28-71-48-20-21-36-45-47-71-12-28-18-57-18-87s6-59 18-87c11-26 27-50 47-70 21-21 44-37 71-49 28-12 57-17 88-17z"
                  transform="matrix(.12790089092 0 0 .12790089092 -128.22109287 -266.58431113)"
                />
                <path
                  d="m4597 3401.22c-4 5-5 10-5 17 0 3 0 6 2 10 1 3 3 6 5 9 3 2 5 4 8 5s7 2 11 2h417c7 0 13-2 18-7 6-6 8-12 8-20s-2-13-8-19c-5-5-10-7-18-7h-343c-4 0-6-2-8-5-1-3-1-7 1-9l371-443c5-5 6-11 6-18 0-3-1-6-2-9s-3-7-6-9c-2-2-5-4-8-6-3-1-7-2-11-2h-417c-7 0-13 3-18 8-6 5-8 11-8 18 0 8 2 14 8 20 5 5 11 8 18 8h342c3 0 6 1 8 4 1 3 1 7-1 9z"
                  transform="matrix(.12790089092 0 0 .12790089092 -128.22109287 -266.58431113)"
                />
                <path
                  d="m5609 3444.22c8 0 14-2 20-7 5-6 7-12 7-19v-502c0-7-2-13-7-18-6-5-11-8-19-8s-14 2-19 8c-6 5-8 11-8 18v272c0 27-5 54-16 79-10 24-25 46-43 64-19 19-41 33-65 44-25 11-51 16-79 16-27 0-54-5-79-16-24-11-46-25-64-43-19-19-33-41-43-65-11-25-16-52-16-79v-272c0-7-3-13-8-18-6-5-11-8-19-8s-13 2-19 8c-5 5-8 11-8 18v272c0 34 7 67 20 99 14 30 32 58 56 82 24 23 51 41 82 55 31 13 64 20 98 20 28 0 56-3 83-12 26-8 49-21 70-38l35-27c3-2 6-3 9-1 3 1 5 4 5 7l1 44c0 8 3 14 8 20 5 5 11 7 18 7z"
                  transform="matrix(.12790089092 0 0 .12790089092 -128.22109287 -266.58431113)"
                />
                <path
                  d="m6162 3439.22c4 4 10 5 16 5 4 0 8 0 11-2 3-1 5-3 8-5 3-3 5-6 6-10 2-3 2-6 2-9 0-8-3-14-8-20l-253-285c-2-2-3-5-2-7 0-3 1-5 3-6l252-163c7-5 8-12 8-21 0-3 0-6-1-9-2-3-4-7-7-9-2-2-5-4-8-6-3-1-7-2-11-2-5 0-9 1-14 4l-363 236c-2 2-5 2-8 0-3-1-5-4-5-7v-470c0-7-2-13-7-19-6-5-12-8-19-8-8 0-14 3-19 8-6 6-8 12-8 19v764c0 8 2 14 8 19 5 6 11 8 19 8 7 0 13-2 18-8 6-5 8-11 8-19v-210c0-3 2-6 4-7l93-61c4-3 8-2 11 1z"
                  transform="matrix(.12790089092 0 0 .12790089092 -128.22109287 -266.58431113)"
                />
                <path
                  d="m6802.94 3171.21c0-39.08-6.34-76.05-21.12-111.96-14.79-35.91-36.97-67.59-64.43-95.06-57.04-57.03-125.69-85.55-207.02-85.55-80.27 0-148.92 28.52-207.01 85.55-57.04 58.09-85.55 125.69-85.55 207.02 0 81.32 28.51 149.98 85.55 207.01 58.09 57.04 126.74 85.55 207.01 85.55 81.33 0 149.98-28.51 207.02-85.55 58.09-57.03 86.6-125.69 85.55-207.01zm-292.57-235.53c32.74 0 63.37 5.28 92.95 17.95 27.46 12.68 52.81 29.58 74.99 51.76 21.12 21.12 38.02 46.47 49.64 73.93 12.67 29.57 19.01 60.2 19.01 91.89 0 31.68-6.34 62.31-19.01 91.89-11.62 27.46-28.52 52.81-49.64 73.93-22.18 22.18-47.53 39.08-74.99 51.75-29.58 12.68-60.21 19.02-92.95 19.02-31.68 0-63.37-6.34-92.94-19.02-27.46-12.67-52.81-29.57-73.94-50.69-22.18-22.18-39.08-47.53-50.69-74.99-12.68-29.58-17.96-60.21-17.96-91.89 0-31.69 5.28-62.32 17.96-91.89 11.61-27.46 28.51-52.81 50.69-73.93 21.13-22.18 46.48-39.08 73.94-51.76 29.57-12.67 61.26-17.95 92.94-17.95z"
                  transform="matrix(.12790089092 0 0 .12790089092 -129.98018937 -266.58431113)"
                />
              </g>
            </svg>
          </a>
        </div>
        <div slot="navbar" style="flex: 1"></div>
        <vaadin-button
          class="navbar"
          slot="navbar [touch-optimized]"
          title="Share"
          @click="${this.__openSharingDialog}"
        >
          <iron-icon icon="vaadin:connect"></iron-icon>
        </vaadin-button>
        <vaadin-button
          class="navbar"
          slot="navbar [touch-optimized]"
          title="GitHub repo"
          @click="${() => window.open(Package.repository.url, "_blank")}"
        >
          <iron-icon icon="vaadin:code"></iron-icon>
        </vaadin-button>

        <vaadin-form-layout slot="drawer">
          <input-format
            .selected="${this.input.format}"
            @selected-changed="${(e) => this.input.setFormat(e.detail.value)}"
          ></input-format>

          <external-input
            @import-url="${(e) => this.input.loadInput(e.detail.value)}"
            @load-sample="${this.__prepareSample}"
          ></external-input>

          <prefixes-menu
            .prefixes="${this.output.prefixes}"
            .customPrefixes="${this.output.customPrefixes}"
            @prefix-selected="${(e) => this.output.addPrefix(e.detail.value)}"
            @prefix-unselected="${(e) =>
              this.output.removePrefix(e.detail.value)}"
            @custom-prefix-set="${(e) =>
              this.output.setCustomPrefix(e.detail.prefix, e.detail.namespace)}"
            @change="${this.__manualParse}"
          ></prefixes-menu>
        </vaadin-form-layout>

        <vaadin-split-layout>
          <section id="input" style="width: 50%">
            <header>
              <h2>Input</h2>
              <span class="manual error" ?hidden="${!this.input.hasError}">
                Parsing failed
                <a href="#" @click="${this.__manualParse}" title="Parse again"
                  >⟳</a
                >
              </span>
            </header>

            <rdf-editor
              .value="${this.input.value || ""}"
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
        @opened-changed="${(e) => {
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
      format,
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
      url: this.sharingLink,
    });
    const response = await fetch(shortnenerUrl, {
      method: "POST",
      body,
    });

    this.sharingLink = await response.text();
  }

  // eslint-disable-next-line class-methods-use-this
  __renderSharingDialog(parent) {
    /* eslint-disable lit/no-template-bind */
    return (root) => {
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
