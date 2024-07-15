import{r as n,a as s,d as v,k as b,l as f,E as x,T as c,f as d,h,F as g,m as k,n as _,s as u,p as y,x as a}from"./index-BXj-mBhB.js";import{L as C,D as w,C as T,r as E,h as F,F as P}from"./input-field-container-styles-CAq_N3bh.js";import{D as S,I as $,a as z,L as A}from"./vaadin-text-field-CweKE5aO.js";import"./vaadin-list-box-_TkPduXY.js";n("vaadin-checkbox",s`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='checkbox'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
      flex: none;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      content: '';
      pointer-events: none;
      display: inline-block;
      width: 0;
      height: 0;
      border: 0 solid var(--lumo-primary-contrast-color);
      border-width: 0.1875em 0 0 0.1875em;
      box-sizing: border-box;
      transform-origin: 0 0;
      position: absolute;
      top: 0.8125em;
      left: 0.5em;
      transform: scale(0.55) rotate(-135deg);
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
      width: 0.625em;
      height: 1.0625em;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      transform: none;
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
      transition: opacity 0.25s;
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
    :host(:hover) [part='checkbox']::after {
      transition: width 0.1s, height 0.25s;
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const N=v(i=>class extends S(b($(i))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(t){this._toggleChecked(t.target.checked)}_toggleChecked(t){this.checked=t}});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class M{constructor(e,t,o){this.sourceSlot=e,this.targetFactory=t,this.copyCallback=o,e&&e.addEventListener("slotchange",()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()})}hostConnected(){this.__sourceSlotObserver=new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget()),this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const e=this.targetFactory();if(!e)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach(o=>{o.parentElement===e&&e.removeChild(o)}),delete this.__slotTargetClones);const t=this.sourceSlot.assignedNodes({flatten:!0}).filter(o=>!(o.nodeType==Node.TEXT_NODE&&o.textContent.trim()===""));t.length>0&&(e.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(t,e))}__copyNodesToSlotTarget(e,t){this.__slotTargetClones=this.__slotTargetClones||[],e.forEach(o=>{const r=o.cloneNode(!0);this.__slotTargetClones.push(r),t.appendChild(r),this.__sourceSlotObserver.observe(o,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),typeof this.copyCallback=="function"&&this.copyCallback(e)}}/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class l extends C(N(w(f(x(c(T(d))))))){static get is(){return"vaadin-checkbox"}static get template(){return h`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-checkbox-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div class="vaadin-checkbox-wrapper">
          <div part="checkbox"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}connectedCallback(){super.connectedCallback(),this._inputController||(this._inputController=new z(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}),this.addController(this._inputController),this.addController(new A(this.inputElement,this._labelController)),this.addController(new M(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`)}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}}customElements.define(l.is,l);const I=s`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;n("vaadin-checkbox-group",[E,F,I],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class p extends P(g(b(k(c(d))))){static get is(){return"vaadin-checkbox-group"}static get template(){return h`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0}}}static get observers(){return["__valueChanged(value, value.splices)"]}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new _(this,({addedNodes:e,removedNodes:t})=>{const o=this.__filterCheckboxes(e),r=this.__filterCheckboxes(t);o.forEach(this.__registerCheckbox),r.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(o)})}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(e){return e.filter(t=>t instanceof l)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(e){e.some(o=>{const{value:r}=o;return!o.hasAttribute("value")&&(!r||r==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(e){e.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(e.disabled=!0),e.checked?this.__addCheckboxToValue(e.value):this.value.includes(e.value)&&(e.checked=!0)}__unregisterCheckbox(e){e.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),e.checked&&this.__removeCheckboxFromValue(e.value)}_disabledChanged(e,t){super._disabledChanged(e,t),!(!e&&t===void 0)&&t!==e&&this.__checkboxes.forEach(o=>{o.disabled=e})}__addCheckboxToValue(e){this.value.includes(e)||(this.value=[...this.value,e])}__removeCheckboxFromValue(e){this.value.includes(e)&&(this.value=this.value.filter(t=>t!==e))}__onCheckboxCheckedChanged(e){const t=e.target;t.checked?this.__addCheckboxToValue(t.value):this.__removeCheckboxFromValue(t.value)}__valueChanged(e){e.length===0&&this.__oldValue===void 0||(this.__oldValue=e,this.toggleAttribute("has-value",e.length>0),this.__checkboxes.forEach(t=>{t.checked=e.includes(t.value)}),this.validate())}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),e||this.validate()}}customElements.define(p.is,p);n("vaadin-form-item",s`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class m extends c(d){static get template(){return h`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="_onLabelClick">
        <slot name="label" id="labelSlot"></slot>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}_onLabelClick(){const e=Array.prototype.find.call(this.$.contentSlot.assignedNodes(),t=>t.nodeType===Node.ELEMENT_NODE);e&&(e.focus(),e.click())}}customElements.define(m.is,m);class L extends u{static get styles(){return s`
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
    `}static get properties(){return{selected:{type:Array}}}constructor(){super(),this.selected=[]}render(){const e=Object.keys(y).sort(this.__selectedFirst.bind(this));return a`<vaadin-form-item label-position="top">
      <label slot="label">Prefixes</label>
        <div id="list">
          ${e.map(t=>a`
              <vaadin-item
                value="${t}"
                ?selected="${this.selected.includes(t)}"
                @click="${this.__toggle(t)}"
              >
                ${t}
              </vaadin-item>
            `)}
        </div>
      </vaadin-list-box>
    </vaadin-form-item>`}__selectedFirst(e,t){return this.selected.includes(e)&&this.selected.includes(t)?e.localeCompare(t):this.selected.includes(e)?-1:e.localeCompare(t)}__toggle(e){return t=>{const o=t.target.selected?"prefix-unselected":"prefix-selected";this.dispatchEvent(new CustomEvent(o,{detail:{value:e},bubbles:!0,composed:!0}))}}}customElements.define("prefix-list",L);class D extends u{static get properties(){return{prefixes:{type:Object}}}static get styles(){return s`
      vaadin-form-item {
        max-width: 100%;
      }

      dd {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `}constructor(){super(),this.prefixes={}}render(){const e=Object.entries(this.prefixes);return a`
      <vaadin-form-item label-position="top">
        <label slot="label">Custom prefixes (click to edit)</label>
        <dl>
          ${e.map(([t,o])=>a`
              <dt
                @click="${this.editPrefix(t,o)}"
                @keyPress="${this.editPrefix(t,o)}"
              >
                ${t}
              </dt>
              <dd
                dir="rtl"
                title="${o}"
                @click="${this.editPrefix(t,o)}"
                @keyPress="${this.editPrefix(t,o)}"
              >
                ${o}&lrm;
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
    `}editPrefix(e,t){return()=>{this.renderRoot.querySelector("#prefix").value=e,this.renderRoot.querySelector("#ns").value=t}}setPrefix(){const e=this.renderRoot.querySelector("#prefix"),t=this.renderRoot.querySelector("#ns");e.value&&(this.dispatchEvent(new CustomEvent("custom-prefix-set",{detail:{prefix:e.value,namespace:t.value},bubbles:!0,composed:!0})),e.value="",t.value="")}}customElements.define("custom-prefixes",D);class O extends u{static get styles(){return s`
      vaadin-checkbox {
        font-size: var(--lumo-font-size-s);
      }

      [hidden] {
        display: none;
      }
    `}static get properties(){return{prefixes:{type:Array},customPrefixes:{type:Object},copyFromInput:{type:Boolean},extractKnown:{type:Boolean}}}constructor(){super(),this.copyFromInput=!0,this.extractKnown=!0}get __checkboxes(){const e=[];return this.copyFromInput&&e.push("copy"),this.extractKnown&&e.push("extract"),e}render(){return a`
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
    `}__extractKnownChanged(e){this.extractKnown=e.detail.value,this.dispatchEvent(new Event("change"))}}customElements.define("prefixes-menu",O);
