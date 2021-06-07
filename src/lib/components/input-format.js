import { html, LitElement } from "lit";
import { parsers } from "@rdfjs-elements/formats-pretty";
import { selectRenderer } from "lit-vaadin-helpers";
import "@vaadin/vaadin-select/vaadin-select.js";
import "@vaadin/vaadin-list-box/vaadin-list-box.js";
import "@vaadin/vaadin-item/vaadin-item.js";

class InputFormat extends LitElement {
  static get properties() {
    return {
      selected: { type: String }
    };
  }

  constructor() {
    super();
    this.formats = [...parsers.keys()];
  }

  render() {
    /* eslint-disable lit/no-template-bind */
    return html`
      <vaadin-select
        label="Input format"
        value="${this.selected}"
        @value-changed="${this.__onFormatSelected}"
        ${selectRenderer(this.__renderSelectItems)}
      >
      </vaadin-select>
    `;
  }

  __onFormatSelected(e) {
    this.selected = e.detail.value;
    this.dispatchEvent(
      new CustomEvent("selected-changed", {
        detail: e.detail
      })
    );
  }

  __renderSelectItems() {
    return html`
      <vaadin-list-box>
        ${this.formats.map(
          format =>
            html`
              <vaadin-item>${format}</vaadin-item>
            `
        )}
      </vaadin-list-box>
    `;
  }
}

customElements.define("input-format", InputFormat);
