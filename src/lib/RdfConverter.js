import { css, html, LitElement } from "lit";
import "@vaadin/vaadin-app-layout/vaadin-app-layout.js";
import "@vaadin/vaadin-split-layout/vaadin-split-layout.js";
import "@rdfjs-elements/rdf-editor/rdf-editor.js";
import "@rdfjs-elements/rdf-snippet/rdf-snippet.js";
import "@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js";
import "@vaadin/vaadin-form-layout/vaadin-form-layout.js";
import "@vaadin/vaadin-lumo-styles/typography";
import { InputController } from "./InputController.js";
import { OutputController } from "./OutputController.js";

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

      span.error {
        font-size: small;
        color: red;
        padding-left: 10px;
      }

      span.error a {
        text-decoration: none;
        color: inherit;
      }
    `;
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
  }

  render() {
    return html`
      <vaadin-app-layout>
        <vaadin-drawer-toggle
          slot="navbar [touch-optimized]"
        ></vaadin-drawer-toggle>

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
          ></prefixes-menu>
        </vaadin-form-layout>

        <vaadin-split-layout>
          <section id="input" style="width: 50%">
            <header>
              <h2>
                Input
              </h2>
              <span class="error" ?hidden="${!this.input.hasError}">
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

  __manualParse() {
    this.renderRoot.querySelector("rdf-editor").parse();
  }

  __setPrefixes(e) {
    if (this.prefixes.copyFromInput) {
      this.output.setPrefixes(e.detail.prefixes);
    }
  }

  __prepareSample() {
    this.prefixes.copyFromInput = false;
    this.output.addPrefix("schema");
    this.output.setCustomPrefix("person", "http://localhost:8080/data/person/");
    this.input.loadSample();
  }
}
