(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{366:function(e,t,i){"use strict";i.r(t);var s=i(8),r=(i(349),i(347),i(65));i(348),i(255),i(256);class o extends s.b{static get styles(){return s.c`
      :host {
        display: block;
      }
      vaadin-form-item {
        width: 100%;
      }
      #list {
        display: block;
        resize: vertical;
        height: auto;
        max-height: 500px;
        overflow: scroll;
        width: 100%;
      }
      vaadin-item {
        cursor: pointer;
      }
      vaadin-item::before {
        opacity: 0;
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc(
            (1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2
          )
          0;
      }
      vaadin-item[selected]::before {
        opacity: 1;
      }
    `}static get properties(){return{selected:{type:Array}}}constructor(){super(),this.selected=[]}render(){const e=Object.keys(r.a).sort(this.__selectedFirst.bind(this));return s.d`<vaadin-form-item label-position="top">
      <label slot="label">Prefixes</label>
        <div id="list">
          ${e.map(e=>s.d`
              <vaadin-item
                value="${e}"
                ?selected="${this.selected.includes(e)}"
                @click="${this.__toggle(e)}"
              >
                ${e}
              </vaadin-item>
            `)}
        </div>
      </vaadin-list-box>
    </vaadin-form-item>`}__selectedFirst(e,t){return this.selected.includes(e)&&this.selected.includes(t)?e.localeCompare(t):this.selected.includes(e)?-1:e.localeCompare(t)}__toggle(e){return t=>{const i=t.target.selected?"prefix-unselected":"prefix-selected";this.dispatchEvent(new CustomEvent(i,{detail:{value:e},bubbles:!0,composed:!0}))}}}customElements.define("prefix-list",o);i(257),i(146);class a extends s.b{static get properties(){return{prefixes:{type:Object}}}static get styles(){return s.c`
      vaadin-form-item {
        max-width: 100%;
      }

      dd {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `}constructor(){super(),this.prefixes={}}render(){const e=Object.entries(this.prefixes);return s.d`
      <vaadin-form-item label-position="top">
        <label slot="label">Custom prefixes (click to edit)</label>
        <dl>
          ${e.map(([e,t])=>s.d`
              <dt
                @click="${this.editPrefix(e,t)}"
                @keyPress="${this.editPrefix(e,t)}"
              >
                ${e}
              </dt>
              <dd
                dir="rtl"
                title="${t}"
                @click="${this.editPrefix(e,t)}"
                @keyPress="${this.editPrefix(e,t)}"
              >
                ${t}&lrm;
              </dd>
            `)}
        </dl>
        <vaadin-text-field id="prefix" label="Prefix"></vaadin-text-field>
        <vaadin-text-field
          id="ns"
          label="Namespace"
          placeholder="Empty to remove"
        ></vaadin-text-field>
        <vaadin-button @click="${this.setPrefix}">Set prefix</vaadin-button>
      </vaadin-form-item>
    `}editPrefix(e,t){return()=>{this.renderRoot.querySelector("#prefix").value=e,this.renderRoot.querySelector("#ns").value=t}}setPrefix(){const e=this.renderRoot.querySelector("#prefix"),t=this.renderRoot.querySelector("#ns");e.value&&(this.dispatchEvent(new CustomEvent("custom-prefix-set",{detail:{prefix:e.value,namespace:t.value},bubbles:!0,composed:!0})),e.value="",t.value="")}}customElements.define("custom-prefixes",a);class n extends s.b{static get styles(){return s.c`
      vaadin-checkbox {
        font-size: var(--lumo-font-size-s);
      }

      [hidden] {
        display: none;
      }
    `}static get properties(){return{prefixes:{type:Array},customPrefixes:{type:Object},copyFromInput:{type:Boolean},extractKnown:{type:Boolean}}}constructor(){super(),this.copyFromInput=!0,this.extractKnown=!0}get __checkboxes(){const e=[];return this.copyFromInput&&e.push("copy"),this.extractKnown&&e.push("extract"),e}render(){return s.d`
      <vaadin-checkbox-group label="Prefixes" .value="${this.__checkboxes}">
        <vaadin-checkbox
          value="copy"
          @checked-changed="${e=>{this.copyFromInput=e.detail.value}}"
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
    `}__extractKnownChanged(e){this.extractKnown=e.detail.value,this.dispatchEvent(new Event("change"))}}customElements.define("prefixes-menu",n)}}]);
//# sourceMappingURL=e51c5db72abfdf4f0d3c.js.map