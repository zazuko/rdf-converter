import{i as E,t as S,A as _,e as I,D as q,a as u,r as d,P as M,B as k,d as B,E as O,h as D,T as R,f as T,s as P,x as v,j as F}from"./index-BXj-mBhB.js";import{i as H,f as V,a as L,D as z,F as $}from"./input-field-container-styles-CAq_N3bh.js";import"./vaadin-list-box-_TkPduXY.js";import{o as j,O as U,p as W}from"./templates-2IXT8wx1.js";const g={};class K extends E{constructor(e){if(super(e),this.previousValue=g,e.type!==S.ELEMENT)throw new Error("renderer only supports binding to element")}render(e,t){return _}update(e,[t,i]){var n;const s=this.previousValue===g;if(!this.hasChanged(i))return _;this.previousValue=Array.isArray(i)?Array.from(i):i;const a=e.element;if(s){const r=(n=e.options)===null||n===void 0?void 0:n.host;this.addRenderer(a,t,{host:r})}else this.runRenderer(a);return _}hasChanged(e){let t=!0;return Array.isArray(e)?Array.isArray(this.previousValue)&&this.previousValue.length===e.length&&e.every((i,n)=>i===this.previousValue[n])&&(t=!1):this.previousValue===e&&(t=!1),t}}class Q extends K{addRenderer(e,t,i){e.renderer=(n,s)=>{q(t.call(i.host,s),n,i)}}runRenderer(e){e.requestContentUpdate()}}const Y=I(Q),G=(o,e)=>Y(o,e);/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const A=u`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;d("",A,{moduleId:"lumo-menu-overlay-core"});const Z=u`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,w=[j,A,Z];d("",w,{moduleId:"lumo-menu-overlay"});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const J=u`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --lumo-button-size: var(--lumo-size-s);
  }
`;d("vaadin-select",[H,J],{moduleId:"lumo-select"});d("vaadin-select-value-button",u`
    :host {
      min-height: var(--lumo-size-m);
      padding: 0 0.25em;
    }

    :host::before,
    :host::after {
      display: none;
    }

    :host([focus-ring]) {
      box-shadow: none;
    }

    ::slotted(vaadin-item:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const X=u`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;d("vaadin-select-overlay",[w,X],{moduleId:"lumo-select-overlay"});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/M({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var o=this.query;o&&(!this.full&&o[0]!=="("&&(o="("+o+")"),this._mq=window.matchMedia(o),this._add(),this.queryHandler(this._mq))},queryHandler:function(o){this._setQueryMatches(o.matches)}});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const f={start:"top",end:"bottom"},y={start:"left",end:"right"},N=o=>class extends o{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(positionTarget, horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened)"]}constructor(){super(),this.__boundUpdatePosition=this._updatePosition.bind(this)}__overlayOpenedChanged(t){if(["scroll","resize"].forEach(i=>{t?window.addEventListener(i,this.__boundUpdatePosition):window.removeEventListener(i,this.__boundUpdatePosition)}),t){const i=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(i[n],10)})),this.setAttribute("dir",i.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const t=this.positionTarget.getBoundingClientRect(),i=this.__shouldAlignStartVertically(t);this.style.justifyContent=i?"flex-start":"flex-end";const n=this.__shouldAlignStartHorizontally(t,this.__isRTL),s=!this.__isRTL&&n||this.__isRTL&&!n;this.style.alignItems=s?"flex-start":"flex-end";const a=this.getBoundingClientRect(),r=this.__calculatePositionInOneDimension(t,a,this.noVerticalOverlap,f,this,i),l=this.__calculatePositionInOneDimension(t,a,this.noHorizontalOverlap,y,this,n);Object.assign(this.style,r,l),this.toggleAttribute("bottom-aligned",!i),this.toggleAttribute("top-aligned",i),this.toggleAttribute("end-aligned",!s),this.toggleAttribute("start-aligned",s)}__shouldAlignStartHorizontally(t,i){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const s=Math.min(window.innerWidth,document.documentElement.clientWidth),a=!i&&this.horizontalAlign==="start"||i&&this.horizontalAlign==="end";return this.__shouldAlignStart(t,n,s,this.__margins,a,this.noHorizontalOverlap,y)}__shouldAlignStartVertically(t){const i=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),s=this.verticalAlign==="top";return this.__shouldAlignStart(t,i,n,this.__margins,s,this.noVerticalOverlap,f)}__shouldAlignStart(t,i,n,s,a,r,l){const c=n-t[r?l.end:l.start]-s[l.end],p=t[r?l.start:l.end]-s[l.start],m=a?c:p,C=m>(a?p:c)||m>i;return a===C}__calculatePositionInOneDimension(t,i,n,s,a,r){const l=r?s.start:s.end,c=r?s.end:s.start,p=parseFloat(a.style[l]||getComputedStyle(a)[l]),m=i[r?s.start:s.end]-t[n===r?s.end:s.start];return{[l]:p+m*(r?-1:1)+"px",[c]:""}}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */d("vaadin-select-overlay",u`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class b extends N(U){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const e=this._getMenuElement();this.owner._assignMenuElement(e)}}_getMenuElement(){return Array.from(this.children).find(e=>e.localName!=="style")}}customElements.define(b.is,b);/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */d("vaadin-select-value-button",u`
    :host {
      margin: 0;
      min-width: 0;
      width: 0;
    }

    ::slotted(vaadin-item) {
      padding-left: 0;
      padding-right: 0;
      flex: auto;
    }

    /* placeholder styles */
    ::slotted(:not([selected])) {
      line-height: normal;
    }

    /* TODO: unsupported selector */
    .vaadin-button-container {
      text-align: inherit;
    }

    [part='label'] {
      width: 100%;
      padding: 0;
      line-height: inherit;
    }
  `,{moduleId:"vaadin-select-value-button-styles"});class x extends k{static get is(){return"vaadin-select-value-button"}}customElements.define(x.is,x);/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const ee=B(o=>class extends o{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(t=>{if(!(this._getDirectSlotChild(t)!==void 0)){const n=this.slots[t],s=n();s instanceof Element&&(s.setAttribute("slot",t),this.appendChild(s))}})}_getDirectSlotChild(t){return Array.from(this.children).find(i=>i.slot===t)}});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */d("vaadin-select",[V,L],{moduleId:"vaadin-select-styles"});class h extends z($(ee(O(R(T))))){static get is(){return"vaadin-select"}static get template(){return D`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
          background-color: transparent;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[theme]]"
      ></vaadin-select-overlay>

      <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
    `}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputContainer:Object,_items:Object}}static get observers(){return["_updateAriaExpanded(opened)","_updateAriaRequired(required)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}get slots(){return{...super.slots,value:()=>{const e=document.createElement("vaadin-select-value-button");return e.setAttribute("aria-haspopup","listbox"),e}}}get _valueButton(){return this._getDirectSlotChild("value")}constructor(){super();const e=h._uniqueSelectId=1+h._uniqueSelectId||0;this._fieldId=`${this.localName}-${e}`,this._boundOnKeyDown=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this._valueButton&&(this._valueButton.setAttribute("aria-labelledby",`${this._labelId} ${this._fieldId}`),this._updateAriaRequired(this.required),this._updateAriaExpanded(this.opened),this._setFocusElement(this._valueButton),this.ariaTarget=this._valueButton,this._valueButton.addEventListener("keydown",this._boundOnKeyDown))}disconnectedCallback(){super.disconnectedCallback(),this._valueButton&&this._valueButton.removeEventListener("keydown",this._boundOnKeyDown),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),W(this)}requestContentUpdate(){this._overlayElement&&(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_rendererChanged(e,t){t&&(t.setProperties({owner:this,renderer:e}),this.requestContentUpdate())}_assignMenuElement(e){e&&e!==this.__lastMenuElement&&(this._menuElement=e,this.__initMenuItems(e),e.addEventListener("items-changed",()=>{this.__initMenuItems(e)}),e.addEventListener("selected-changed",()=>this.__updateValueButton()),e.addEventListener("keydown",t=>this._onKeyDownInside(t),!0),e.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),e.setAttribute("role","listbox"),this.__lastMenuElement=e)}__initMenuItems(e){e.items&&(this._items=e.items,this._items.forEach(t=>t.setAttribute("role","option")))}_valueChanged(e,t){this.toggleAttribute("has-value",!!e),!(e===""&&t===void 0)&&this.validate()}_onClick(e){e.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(e){e.preventDefault()}_onKeyDown(e){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(e.key)&&e.key.length===1){const t=this._menuElement.selected,i=t!==void 0?t:-1,n=this._menuElement._searchKey(i,e.key);n>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=n)}}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",this._inputContainer.offsetWidth+"px");const i=this.hasAttribute("focus-ring");this._openedWithFocusRing=i,i&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else t&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(e){this._valueButton&&this._valueButton.setAttribute("aria-expanded",e?"true":"false")}_updateAriaRequired(e){this._valueButton&&this._valueButton.setAttribute("aria-required",e?"true":"false")}_updateAriaLive(e){this._valueButton&&(e?this._valueButton.setAttribute("aria-live","polite"):this._valueButton.removeAttribute("aria-live"))}__attachSelectedItem(e){let t;const i=e.getAttribute("label");i?t=this.__createItem(i):t=e.cloneNode(!0),t._sourceItem=e,this.__appendItem(t),t.selected=!0}__createItem(e){const t=document.createElement("vaadin-item");return t.textContent=e,t}__appendItem(e){e.removeAttribute("tabindex"),e.removeAttribute("role"),e.setAttribute("id",this._fieldId),this._valueButton.appendChild(e)}__updateValueButton(){if(!this._valueButton)return;this._valueButton.innerHTML="";const e=this._items[this._menuElement.selected];if(this._valueButton.removeAttribute("placeholder"),e)this.__attachSelectedItem(e),this._valueChanging||(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const t=this.__createItem(this.placeholder);this.__appendItem(t),this._valueButton.setAttribute("placeholder","")}}_updateSelectedItem(e,t){t&&(this._menuElement.selected=t.reduce((i,n,s)=>i===void 0&&n.value===e?s:i,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging))}_shouldRemoveFocus(){return!this.opened}_setFocused(e){super._setFocused(e),e||this.validate()}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}customElements.define(h.is,h);const{parsers:te}=F;class ie extends P{static get properties(){return{selected:{type:String}}}constructor(){super(),this.formats=[...te.keys()]}render(){return v`
      <vaadin-select
        label="Input format"
        value="${this.selected}"
        @value-changed="${this.__onFormatSelected}"
        ${G(this.__renderSelectItems)}
      >
      </vaadin-select>
    `}__onFormatSelected(e){this.selected=e.detail.value,this.dispatchEvent(new CustomEvent("selected-changed",{detail:e.detail}))}__renderSelectItems(){return v`
      <vaadin-list-box>
        ${this.formats.map(e=>v` <vaadin-item>${e}</vaadin-item> `)}
      </vaadin-list-box>
    `}}customElements.define("input-format",ie);
