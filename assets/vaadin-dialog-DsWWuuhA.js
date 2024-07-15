import{o as b,O as w,p as z}from"./templates-2IXT8wx1.js";import{a as g,r as c,G as C,H as L,I as $,J as x,h as B,E,f as D}from"./index-BXj-mBhB.js";const O=g`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;c("vaadin-dialog-overlay",[b,O],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */function h(r){return r.touches?r.touches[0]:r}function y(r){return r.clientX>=0&&r.clientX<=window.innerWidth&&r.clientY>=0&&r.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const k=r=>class extends r{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:C},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const t=this.$.overlay.$.resizerContainer,s=e.target===t,a=e.offsetX>t.clientWidth||e.offsetY>t.clientHeight,l=e.target===this.$.overlay.$.content,o=e.composedPath().some((n,f)=>{if(n.classList){const _=n.classList.contains(this.__dragHandleClassName||"draggable"),p=n.classList.contains("draggable-leaf-only"),v=f===0;return p&&v||_&&(!p||v)}});if(s&&!a||l||o){!o&&e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const n=h(e);this._originalMouseCoords={top:n.pageY,left:n.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const t=h(e);if(y(t)){const s=this._originalBounds.top+(t.pageY-this._originalMouseCoords.top),a=this._originalBounds.left+(t.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:s,left:a})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */c("vaadin-dialog-overlay",g`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const M=r=>class extends r{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const t=document.createElement("div");this._resizeListeners.start[e]=s=>this._startResize(s,e),this._resizeListeners.resize[e]=s=>this._resize(s,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&t.classList.add("edge"),t.classList.add("resizer"),t.classList.add(e),t.addEventListener("mousedown",this._resizeListeners.start[e]),t.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(t)})}_startResize(e,t){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const s=h(e);this._originalMouseCoords={top:s.pageY,left:s.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[t]),window.addEventListener("touchmove",this._resizeListeners.resize[t]),window.addEventListener("mouseup",this._resizeListeners.stop[t]),window.addEventListener("touchend",this._resizeListeners.stop[t]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,t){const s=h(e);y(s)&&(t.split("").forEach(l=>{switch(l){case"n":{const o=this._originalBounds.height-(s.pageY-this._originalMouseCoords.top),n=this._originalBounds.top+(s.pageY-this._originalMouseCoords.top);o>40&&this.$.overlay.setBounds({top:n,height:o});break}case"e":{const o=this._originalBounds.width+(s.pageX-this._originalMouseCoords.left);o>40&&this.$.overlay.setBounds({width:o});break}case"s":{const o=this._originalBounds.height+(s.pageY-this._originalMouseCoords.top);o>40&&this.$.overlay.setBounds({height:o});break}case"w":{const o=this._originalBounds.width-(s.pageX-this._originalMouseCoords.left),n=this._originalBounds.left+(s.pageX-this._originalMouseCoords.left);o>40&&this.$.overlay.setBounds({left:n,width:o});break}}}),this.$.overlay.notifyResize())}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:t,height:s}=getComputedStyle(this.$.overlay.$.overlay),a=this.$.overlay.$.content;a.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:l,height:o}=getComputedStyle(a);return a.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:t,height:s,contentWidth:l,contentHeight:o}}};/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */c("vaadin-dialog-overlay",g`
    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let d;class m extends L($,w){static get is(){return"vaadin-dialog-overlay"}static get template(){if(!d){d=super.template.cloneNode(!0);const i=d.content.querySelector('[part="content"]'),e=d.content.querySelector('[part="overlay"]'),t=document.createElement("div");t.id="resizerContainer",t.classList.add("resizer-container"),t.appendChild(i),e.appendChild(t)}return d}static get properties(){return{modeless:Boolean,withBackdrop:Boolean}}setBounds(i){const e=this.$.overlay,t=Object.assign({},i);e.style.position!=="absolute"&&(e.style.position="absolute",this.setAttribute("has-bounds-set",""),this.__forceSafariReflow());for(const s in t)typeof t[s]=="number"&&(t[s]=`${t[s]}px`);Object.assign(e.style,t)}getBounds(){const i=this.$.overlay.getBoundingClientRect(),e=this.getBoundingClientRect(),t=i.top-e.top,s=i.left-e.left,a=i.width,l=i.height;return{top:t,left:s,width:a,height:l}}__forceSafariReflow(){const i=this.$.resizerContainer.scrollTop,e=this.$.overlay;e.style.display="block",requestAnimationFrame(()=>{e.style.display="",this.$.resizerContainer.scrollTop=i})}}customElements.define(m.is,m);class u extends x(E(k(M(D)))){static get template(){return B`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_rendererChanged(renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),z(this)}requestContentUpdate(){this.$.overlay.requestContentUpdate()}_rendererChanged(i){this.$.overlay.setProperties({owner:this,renderer:i})}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}_openedChanged(i){this.$.overlay.opened=i}_ariaLabelChanged(i){i?this.$.overlay.setAttribute("aria-label",i):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(i){i.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(i){this.noCloseOnOutsideClick&&i.preventDefault()}_handleEscPress(i){this.noCloseOnEsc&&i.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(u.is,u);/**
 * @license
 * Copyright (c) 2000 - 2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const A=u;export{u as Dialog,A as DialogElement};
