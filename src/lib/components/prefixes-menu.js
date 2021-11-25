import { css, html, LitElement } from "lit";
import "@vaadin/vaadin-checkbox/vaadin-checkbox.js";
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
      copyFromInput: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.copyFromInput = true;
  }

  render() {
    return html`
      <vaadin-form-item label-position="top">
        <label slot="label">Prefixes</label>
        <vaadin-checkbox
          ?checked="${this.copyFromInput}"
          @checked-changed="${e => {
            this.copyFromInput = e.detail.value;
          }}"
          >Copy prefixes from input</vaadin-checkbox
        >
      </vaadin-form-item>

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
}

customElements.define("prefixes-menu", PrefixesMenu);
