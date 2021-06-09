import { html, LitElement } from "lit";
import "@vaadin/vaadin-text-field/vaadin-text-field.js";
import "@vaadin/vaadin-button/vaadin-button.js";

class ExternalInput extends LitElement {
  render() {
    return html`
      <vaadin-text-field label="Input from URL"></vaadin-text-field>
      <vaadin-button @click="${this.__import}">Load resource</vaadin-button>
    `;
  }

  __import() {
    const { value } = this.renderRoot.querySelector("vaadin-text-field");
    this.dispatchEvent(
      new CustomEvent("import-url", {
        detail: { value }
      })
    );
  }
}

customElements.define("external-input", ExternalInput);
