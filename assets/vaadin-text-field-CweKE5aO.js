import{i as h,S as c,V as _,D as g,F as b,f,a as v}from"./input-field-container-styles-CAq_N3bh.js";import{r as u,d as r,K as m,o as y,q as C,a as E,h as x,T as I,E as A,f as D}from"./index-BXj-mBhB.js";/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */u("vaadin-text-field",h,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class a extends c{constructor(s,e){super(s,"input",()=>document.createElement("input"),(t,i)=>{t.value&&i.setAttribute("value",t.value),t.type&&i.setAttribute("type",t.type);const p=a._uniqueInputId=1+a._uniqueInputId||0;t._inputId=`${t.localName}-${p}`,i.id=t._inputId,typeof e=="function"&&e(i)})}}/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const S=r(n=>class extends n{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((t,i)=>{this._delegateAttribute(t,e[i])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((t,i)=>{this._delegateProperty(t,e[i])})}_delegateAttribute(e,t){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",t?"true":!1),typeof t=="boolean"?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const L=r(n=>class extends n{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(e!=null?this.inputElement.value=e:this.inputElement.value="")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_onInput(e){this.__userInput=e.isTrusted,this.value=e.target.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(e!==""&&e!=null),!(e===""&&t===void 0)&&(this.__userInput||this._forwardInputValue(e))}});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const d=r(n=>class extends S(_(L(n))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(t=>this.__isValidConstraint(t))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(${this.constructor.constraints.join(", ")})`)}_constraintsChanged(...e){this.invalid&&(this._hasValidConstraints(e)?this.validate():this.invalid=!1)}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const l=new WeakMap;function P(n){return l.has(n)||l.set(n,new Set),l.get(n)}function O(n,s){const e=document.createElement("style");e.textContent=n,s===document?document.head.appendChild(e):s.insertBefore(e,s.firstChild)}const T=r(n=>class extends n{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),t=P(e);this.slotStyles.forEach(i=>{t.has(i)||(O(i,e),t.add(i))})}});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const M=n=>class extends T(g(d(b(m(n))))){static get properties(){return{autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onKeyDown(e){super._onKeyDown(e),e.key==="Escape"&&this.clearButtonVisible&&this.value&&(e.stopPropagation(),this.__clear())}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const k=n=>class extends M(n){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0},_enabledCharPattern:{type:String,observer:"_enabledCharPatternChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_onBlur(e){super._onBlur(e),this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_forwardInputValue(e){super._forwardInputValue(e),this.invalid&&this.validate()}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault(),super._onKeyDown(e)}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){const t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){const t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}_enabledCharPatternChanged(e){e&&(this.__enabledCharRegExp=new RegExp("^"+e+"$"),this.__enabledTextRegExp=new RegExp("^"+e+"*$"))}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class w{constructor(s,e){this.input=s,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",t=>{this.__initLabel(t.detail.node)}),this.__initLabel(e.node)}__initLabel(s){s&&(s.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&s.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const s=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",s)};this.input.addEventListener("click",s)}}/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const B=n=>class extends d(n){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const e=this.inputElement;if(e&&e.value.length>0&&!this.checkValidity()){e.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=y.debounce(this._inputDebouncer,C.after(200),()=>{this.removeAttribute("input-prevented")});return}}}_onInput(e){this._checkInputValue(),super._onInput(e)}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const V=E`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const F=[f,v,V];/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */u("vaadin-text-field",F,{moduleId:"vaadin-text-field-styles"});class o extends B(k(I(A(D)))){static get is(){return"vaadin-text-field"}static get template(){return x`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new a(this,s=>{this._setInputElement(s),this._setFocusElement(s),this.stateTarget=s,this.ariaTarget=s})),this.addController(new w(this.inputElement,this._labelController))}}customElements.define(o.is,o);export{S as D,L as I,w as L,a};
