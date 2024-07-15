import{a as f,r as p,l as b,F as g,h as _,T as v,m as y,f as d,n as x,o as I,q as k,u as h,E as w}from"./index-BXj-mBhB.js";const L=f`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon),
  :host ::slotted(iron-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;p("vaadin-item",L,{moduleId:"lumo-item"});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const A=a=>class extends b(g(a)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class u extends A(v(y(d))){static get template(){return _`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value}}customElements.define(u.is,u);p("vaadin-list-box",f`
    :host {
      -webkit-tap-highlight-color: transparent;
      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
    }

    /* Dividers */
    [part='items'] ::slotted(hr) {
      height: 1px;
      border: 0;
      padding: 0;
      margin: var(--lumo-space-s) var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-list-box"});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const T=a=>class extends a{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new x(this,()=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,s,t,r){if(!r&&e){this.setAttribute("aria-orientation",s||"vertical"),this.items.forEach(i=>{s?i.setAttribute("orientation",s):i.removeAttribute("orientation")}),this._setFocusable(t||0);const o=e[t];e.forEach(i=>i.selected=i===o),o&&!o.disabled&&this._scrollToItem(t)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(s=>s._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const s=this._filterItems(e.composedPath())[0];let t;s&&!s.disabled&&(t=this.items.indexOf(s))>=0&&(this.selected=t)}_searchKey(e,s){this._searchReset=I.debounce(this._searchReset,k.after(500),()=>this._searchBuf=""),this._searchBuf+=s.toLowerCase();const t=1,r=i=>!(i.disabled||this._isItemHidden(i))&&i.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().indexOf(this._searchBuf)===0;this.items.some(i=>i.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().indexOf(this._searchBuf)===0)||(this._searchBuf=s.toLowerCase());const o=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(o,t,r)}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const s=e.key,t=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(s)&&s.length===1){const c=this._searchKey(t,s);c>=0&&this._focus(c);return}const r=c=>!(c.disabled||this._isItemHidden(c));let o,i;const l=this._isRTL?-1:1;this._vertical&&s==="ArrowUp"||!this._vertical&&s==="ArrowLeft"?(i=-l,o=t-l):this._vertical&&s==="ArrowDown"||!this._vertical&&s==="ArrowRight"?(i=l,o=t+l):s==="Home"?(i=1,o=0):s==="End"&&(i=-1,o=this.items.length-1),o=this._getAvailableIndex(o,i,r),o>=0&&(this._focus(o),e.preventDefault())}_getAvailableIndex(e,s,t){const r=this.items.length;for(let o=0;typeof e=="number"&&o<r;o++,e+=s||1){e<0?e=r-1:e>=r&&(e=0);const i=this.items[e];if(t(i))return e}return-1}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(e,1,t=>!t.disabled);const s=this.items[e];this.items.forEach(t=>t.tabIndex=t===s?0:-1)}_focus(e){const s=this.items[e];this.items.forEach(t=>t.focused=t===s),this._setFocusable(e),this._scrollToItem(e),this._focusItem(s)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(e)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(e){const s=this.items[e];if(!s)return;const t=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),o=(this.items[e+1]||s).getBoundingClientRect(),i=(this.items[e-1]||s).getBoundingClientRect();let l=0;!this._isRTL&&o[t[1]]>=r[t[1]]||this._isRTL&&o[t[1]]<=r[t[1]]?l=o[t[1]]-r[t[1]]:(!this._isRTL&&i[t[0]]<=r[t[0]]||this._isRTL&&i[t[0]]>=r[t[0]])&&(l=i[t[0]]-r[t[0]]),this._scroll(l)}get _vertical(){return this.orientation!=="horizontal"}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const s=this.getAttribute("dir")||"ltr",t=h.detectScrollType(),r=h.getNormalizedScrollLeft(t,s,this._scrollerElement)+e;h.setNormalizedScrollLeft(t,s,this._scrollerElement,r)}}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const E=a=>class extends T(a){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,s,t,r){if(!(!e||!s)){if(r){const o=r.map(i=>e[i]);e.forEach(i=>i.selected=o.indexOf(i)!==-1)}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){const s=this._filterItems(e.composedPath())[0],t=s&&!s.disabled?this.items.indexOf(s):-1;t<0||!this.multiple||(e.preventDefault(),this.selectedValues.indexOf(t)!==-1?this.selectedValues=this.selectedValues.filter(r=>r!==t):this.selectedValues=this.selectedValues.concat(t))}_multipleChanged(e,s){!e&&s&&(this.selectedValues=[],this.items.forEach(t=>t.selected=!1)),e&&!s&&this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0)}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class m extends w(E(v(d))){static get template(){return _`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var n=this.querySelector("vaadin-item");n&&!(n instanceof d)&&console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(m.is,m);
