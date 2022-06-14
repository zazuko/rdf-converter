/*! For license information please see 18b170baed7324553cf3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{244:function(e,t,i){"use strict";var s=i(11),o=i(29),r=i(19),a=i(63),l=i(14),n=i(9);const c=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new r.a(this,()=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,i,s){if(!s&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation")}),this._setFocusable(i||0);const s=e[i];e.forEach(e=>e.selected=e===s),s&&!s.disabled&&this._scrollToItem(i)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let i;t&&!t.disabled&&(i=this.items.indexOf(t))>=0&&(this.selected=i)}_searchKey(e,t){this._searchReset=l.a.debounce(this._searchReset,n.d.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const i=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(i,1,e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,i=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(i,t);return void(e>=0&&this._focus(e))}let s,o;const r=this._isRTL?-1:1;this._vertical&&"ArrowUp"===t||!this._vertical&&"ArrowLeft"===t?(o=-r,s=i-r):this._vertical&&"ArrowDown"===t||!this._vertical&&"ArrowRight"===t?(o=r,s=i+r):"Home"===t?(o=1,s=0):"End"===t&&(o=-1,s=this.items.length-1),s=this._getAvailableIndex(s,o,e=>!(e.disabled||this._isItemHidden(e))),s>=0&&(this._focus(s),e.preventDefault())}_getAvailableIndex(e,t,i){const s=this.items.length;for(let o=0;"number"==typeof e&&o<s;o++,e+=t||1){e<0?e=s-1:e>=s&&(e=0);if(i(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(e){const t=this.items[e];if(!t)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],s=this._scrollerElement.getBoundingClientRect(),o=(this.items[e+1]||t).getBoundingClientRect(),r=(this.items[e-1]||t).getBoundingClientRect();let a=0;!this._isRTL&&o[i[1]]>=s[i[1]]||this._isRTL&&o[i[1]]<=s[i[1]]?a=o[i[1]]-s[i[1]]:(!this._isRTL&&r[i[0]]<=s[i[0]]||this._isRTL&&r[i[0]]>=s[i[0]])&&(a=r[i[0]]-s[i[0]]),this._scroll(a)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",i=a.a.detectScrollType(),s=a.a.getNormalizedScrollLeft(i,t,this._scrollerElement)+e;a.a.setNormalizedScrollLeft(i,t,this._scrollerElement,s)}}},d=e=>class extends(c(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,i,s){if(e&&t){if(s){const t=s.map(t=>e[t]);e.forEach(e=>e.selected=-1!==t.indexOf(e))}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){const t=this._filterItems(e.composedPath())[0],i=t&&!t.disabled?this.items.indexOf(t):-1;i<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(i)?this.selectedValues=this.selectedValues.filter(e=>e!==i):this.selectedValues=this.selectedValues.concat(i))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0)}};var h=i(31);class u extends(Object(h.a)(d(Object(o.a)(s.a)))){static get template(){return s.b`
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
    `}static get is(){return"vaadin-list-box"}static get version(){return"21.0.5"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof s.a||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(u.is,u)},245:function(e,t,i){"use strict";var s=i(11),o=i(29),r=i(95);const a=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>this._setFocused(!1),!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(){this.hasAttribute("active")&&(this._setActive(!1),this.click())}};class l extends(a(Object(o.a)(Object(r.a)(s.a)))){static get template(){return s.b`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}static get version(){return"21.0.5"}constructor(){super(),this.value}}customElements.define(l.is,l)},250:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i(11),o=i(34),r=i(29),a=i(96),l=i(31);class n extends(Object(l.a)(Object(a.a)(Object(r.a)(Object(o.a)(s.a))))){static get template(){return s.b`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        label {
          display: inline-flex;
          align-items: baseline;
          outline: none;
        }

        [part='checkbox'] {
          position: relative;
          display: inline-block;
          flex: none;
        }

        input[type='checkbox'] {
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

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }
      </style>

      <label>
        <span part="checkbox">
          <input
            type="checkbox"
            checked="{{checked::change}}"
            disabled$="[[disabled]]"
            indeterminate="{{indeterminate::change}}"
            role="presentation"
            tabindex="-1"
          />
        </span>

        <span part="label">
          <slot></slot>
        </span>
      </label>
    `}static get is(){return"vaadin-checkbox"}static get version(){return"21.0.5"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(n.is,n)},253:function(e,t,i){"use strict";var s=i(5);i(145),i(94),i(57),i(92),i(70);Object(s.b)("vaadin-item",s.a`
    :host {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      padding: 0.5em 1em;
      min-height: var(--lumo-size-m);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
    }

    /* Checkmark */
    :host([tabindex])::before {
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

    :host([selected])::before {
      opacity: 1;
    }

    :host([active]:not([selected]))::before {
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

    /* Slotted icons */
    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-item"});i(245)},254:function(e,t,i){"use strict";var s=i(5);i(69),i(57),i(92);Object(s.b)("vaadin-list-box",s.a`
    :host {
      -webkit-tap-highlight-color: transparent;
      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
    }

    /* Normal item */
    [part='items'] ::slotted(vaadin-item) {
      -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
      cursor: var(--lumo-clickable-cursor);
      outline: none;
      border-radius: var(--lumo-border-radius-m);
      padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    }

    [part='items'] ::slotted(vaadin-item[disabled]) {
      cursor: default;
    }

    /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
    [part='items'] ::slotted(vaadin-item)::before {
      display: var(--_lumo-item-selected-icon-display);
    }

    /* Hovered item */
    /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
    [part='items'] ::slotted(vaadin-item:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* Focused item */
    [part='items'] ::slotted([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    @media (pointer: coarse) {
      [part='items'] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: transparent;
      }

      [part='items'] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: none;
      }
    }

    /* Dividers */
    [part='items'] ::slotted(hr) {
      height: 1px;
      border: 0;
      padding: 0;
      margin: var(--lumo-space-s) var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
      padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    }
  `,{moduleId:"lumo-list-box"});i(244)},255:function(e,t,i){"use strict";i(254),i(244)},256:function(e,t,i){"use strict";i(253),i(245)},257:function(e,t,i){"use strict";i(273),i(246)},278:function(e,t,i){"use strict";var s=i(5);i(69),i(92);Object(s.b)("vaadin-checkbox",s.a`
    :host {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    [part='label']:not([empty]) {
      margin: 0.1875em 0.875em 0.1875em 0.375em;
    }

    [part='checkbox'] {
      width: calc(1em + 2px);
      height: calc(1em + 2px);
      margin: 0.1875em;
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      pointer-events: none;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
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
      box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) [part='label'] ::slotted(*) {
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
    :host([dir='rtl']) [part='label']:not([empty]) {
      margin: 0.1875em 0.375em 0.1875em 0.875em;
    }

    /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
    :host(:hover) [part='checkbox']::after {
      transition: width 0.1s, height 0.25s;
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
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
  `,{moduleId:"lumo-checkbox"})},347:function(e,t,i){"use strict";i(278);var s=i(5);i(69),i(276);Object(s.b)("vaadin-checkbox-group",s.a`
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
      height: var(--lumo-size-m);
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
    }

    :host([theme~='vertical']) [part='group-field'] {
      display: flex;
      flex-direction: column;
    }

    [part='label'] {
      padding-bottom: 0.7em;
    }

    :host([disabled]) [part='label'] {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    :host([focused]:not([disabled])) [part='label'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:hover:not([disabled]):not([focused])) [part='label'],
    :host(:hover:not([disabled]):not([focused])) [part='helper-text'],
    :host(:hover:not([disabled]):not([focused])) [part='helper-text'] ::slotted(*) {
      color: var(--lumo-body-text-color);
    }

    :host([has-helper]) [part='helper-text']::before {
      content: '';
      display: block;
      height: 0.4em;
    }

    [part='helper-text'],
    [part='helper-text'] ::slotted(*) {
      display: block;
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-xs);
      line-height: var(--lumo-line-height-xs);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      transition: color 0.2s;
    }

    /* helper-text position */
    :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
      display: none;
    }

    :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
      content: '';
      display: block;
      height: 0.4em;
    }

    :host([has-helper][theme~='helper-above-field']) [part='label'] {
      order: 0;
      padding-bottom: 0.4em;
    }

    :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
      order: 1;
    }

    :host([has-helper][theme~='helper-above-field']) [part='group-field'] {
      order: 2;
    }

    :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
      order: 3;
    }

    /* Touch device adjustment */
    @media (pointer: coarse) {
      :host(:hover:not([disabled]):not([focused])) [part='label'] {
        color: var(--lumo-secondary-text-color);
      }
    }
  `,{moduleId:"lumo-checkbox-group",include:["lumo-required-field"]});var o=i(11),r=i(19),a=i(29),l=i(95),n=i(250);class c extends(Object(a.a)(Object(l.a)(o.a))){static get template(){return o.b`
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
        }

        [part='label']:empty {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <label part="label">[[label]]</label>

        <div part="group-field">
          <slot id="slot"></slot>
        </div>

        <div
          part="helper-text"
          aria-live="assertive"
          aria-hidden$="[[_getHelperTextAriaHidden(helperText, _hasSlottedHelper)]]"
        >
          <slot name="helper">[[helperText]]</slot>
        </div>

        <div
          part="error-message"
          aria-live="assertive"
          aria-hidden$="[[_getErrorMessageAriaHidden(invalid, errorMessage)]]"
          >[[errorMessage]]</div
        >
      </div>
    `}static get is(){return"vaadin-checkbox-group"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0,observer:"_disabledChanged"},label:{type:String,value:"",observer:"_labelChanged"},value:{type:Array,value:()=>[],notify:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},required:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_hasSlottedHelper:Boolean}}static get observers(){return["_updateValue(value, value.splices)"]}ready(){super.ready(),this.addEventListener("focusin",()=>this._setFocused(this._containsFocus())),this.addEventListener("focusout",e=>{this._checkboxes.some(t=>e.relatedTarget===t||t.shadowRoot.contains(e.relatedTarget))||(this.validate(),this._setFocused(!1))});const e=e=>{this._changeSelectedCheckbox(e.target)};this._observer=new r.a(this,t=>{const i=this._filterCheckboxes(t.addedNodes);i.forEach(t=>{t.addEventListener("checked-changed",e),this.disabled&&(t.disabled=!0),t.checked?this._addCheckboxToValue(t.value):this.value.indexOf(t.value)>-1&&(t.checked=!0)}),this._filterCheckboxes(t.removedNodes).forEach(t=>{t.removeEventListener("checked-changed",e),t.checked&&this._removeCheckboxFromValue(t.value)}),this._setOrToggleHasHelperAttribute();i.every(e=>{const{value:t}=e;return e.hasAttribute("value")||t&&"on"!==t})||console.warn("Please add value attribute to all checkboxes in checkbox group")})}validate(){return this.invalid=this.required&&0===this.value.length,!this.invalid}get _checkboxes(){return this._filterCheckboxes(this.querySelectorAll("*"))}_filterCheckboxes(e){return Array.from(e).filter(e=>e instanceof n.a)}_disabledChanged(e){this.setAttribute("aria-disabled",e),this._checkboxes.forEach(t=>t.disabled=e)}_addCheckboxToValue(e){-1===this.value.indexOf(e)&&(this.value=this.value.concat(e))}_removeCheckboxFromValue(e){this.value=this.value.filter(t=>t!==e)}_changeSelectedCheckbox(e){this._updatingValue||(e.checked?this._addCheckboxToValue(e.value):this._removeCheckboxFromValue(e.value))}_updateValue(e){0===e.length&&void 0===this._oldValue||(e.length?this.setAttribute("has-value",""):this.removeAttribute("has-value"),this._oldValue=e,this._updatingValue=!0,this._checkboxes.forEach(t=>{t.checked=e.indexOf(t.value)>-1}),this._updatingValue=!1,this.validate())}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e)}_setOrToggleAttribute(e,t){e&&(t?this.setAttribute(e,"boolean"==typeof t?"":t):this.removeAttribute(e))}_getErrorMessageAriaHidden(e,t){return(!t||!e).toString()}_containsFocus(){const e=this.getRootNode().activeElement;return this.contains(e)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused")}_setOrToggleHasHelperAttribute(){const e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes();this._hasSlottedHelper=e.filter(e=>3!==e.nodeType).length>0,this._setOrToggleAttribute("has-helper",this._hasSlottedHelper?"slotted":!!this.helperText)}_getHelperTextAriaHidden(e,t){return(!(e||t)).toString()}}customElements.define(c.is,c)},348:function(e,t,i){"use strict";var s=i(5);i(69),i(57),i(92),i(70);Object(s.b)("vaadin-form-item",s.a`
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
  `,{moduleId:"lumo-form-item"});var o=i(11),r=i(29);class a extends(Object(r.a)(o.a)){static get template(){return o.b`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;

          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;

          margin: calc(0.5 * var(--vaadin-form-item-row-spacing)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing);
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
    `}static get is(){return"vaadin-form-item"}_onLabelClick(){const e=Array.prototype.find.call(this.$.contentSlot.assignedNodes(),e=>e.nodeType===Node.ELEMENT_NODE);e&&(e.focus(),e.click())}}customElements.define(a.is,a)},349:function(e,t,i){"use strict";i(278),i(250)}}]);
//# sourceMappingURL=18b170baed7324553cf3.js.map