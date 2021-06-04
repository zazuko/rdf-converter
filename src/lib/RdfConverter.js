/* eslint-disable import/no-extraneous-dependencies */
import { css, html, LitElement } from "lit";
import "@vaadin/vaadin-app-layout/vaadin-app-layout.js";
import "@vaadin/vaadin-split-layout/vaadin-split-layout.js";
import "@rdfjs-elements/rdf-editor/rdf-editor.js";
import "@rdfjs-elements/rdf-snippet/rdf-snippet.js";
import "@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js";
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
        height: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.input = new InputController(this);
    this.output = new OutputController(this);
  }

  get inputEditorReady() {
    return this.renderRoot.querySelector("rdf-editor").ready;
  }

  render() {
    return html`
      <vaadin-app-layout>
        <vaadin-drawer-toggle
          slot="navbar [touch-optimized]"
        ></vaadin-drawer-toggle>

        <vaadin-split-layout>
          <rdf-editor
            style="width: 50%"
            .value="${this.input.value}"
            .format="${this.input.format}"
            auto-parse
            @quads-changed="${this.__updateOutput}"
          ></rdf-editor>

          <rdf-snippet
            only-output
            formats="application/trig,text/turtle,application/ld+json,application/rdf+xml"
            .inputFormat="${this.input.format}"
            .input="${this.output.value}"
            style="width: 50%"
          ></rdf-snippet>
        </vaadin-split-layout>
      </vaadin-app-layout>
    `;
  }

  __updateOutput(e) {
    console.log(e);
    this.output.updateValue(e.target.value);
  }
}
