import { css, html, LitElement } from "lit";
import "@vaadin/vaadin-checkbox/vaadin-checkbox.js";
import "@vaadin/vaadin-checkbox/vaadin-checkbox-group.js";
import "./prefix-list.js";
import "./custom-prefixes.js";

class PrefixesMenu extends LitElement {
  static get styles() {
    return css`
      vaadin-checkbox {
        font-size: var(--lumo-font-size-s);
      }

      [hidden] {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      prefixes: { type: Array },
      customPrefixes: { type: Object },
      copyFromInput: { type: Boolean },
      extractKnown: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.copyFromInput = true;
    this.extractKnown = true;
  }

  get __checkboxes() {
    const values = [];

    if (this.copyFromInput) {
      values.push("copy");
    }
    if (this.extractKnown) {
      values.push("extract");
    }

    return values;
  }

  render() {
    return html`
      <vaadin-checkbox-group label="Prefixes" .value="${this.__checkboxes}">
        <vaadin-checkbox
          value="copy"
          @checked-changed="${e => {
            this.copyFromInput = e.detail.value;
          }}"
          >Copy prefixes from input</vaadin-checkbox
        >
        <vaadin-checkbox
          value="extract"
          @checked-changed="${this.__extractKnownChanged}"
          >Extract common prefixes</vaadin-checkbox
        >
      </vaadin-checkbox-group>

      <prefix-list
        ?hidden="${this.copyFromInput}"
        .selected="${this.prefixes}"
      ></prefix-list>

      <custom-prefixes
        ?hidden="${this.copyFromInput}"
        .prefixes="${this.customPrefixes}"
      ></custom-prefixes>
    `;
  }

  __extractKnownChanged(e) {
    this.extractKnown = e.detail.value;
    this.dispatchEvent(new Event("change"));
  }
}

customElements.define("prefixes-menu", PrefixesMenu);
