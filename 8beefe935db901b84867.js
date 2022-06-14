(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{257:function(t,e,a){"use strict";a(273),a(246)},351:function(t,e,a){"use strict";a.r(e);var n=a(8);a(257),a(146);class i extends n.b{render(){return n.d`
      <vaadin-text-field label="Input from URL"></vaadin-text-field>
      <vaadin-button @click="${this.__import}">Load resource</vaadin-button>
      <vaadin-form-item label-position="top">
        <label slot="label">Sample n-quads resource</label>
        <vaadin-button
          @click="${()=>this.dispatchEvent(new Event("load-sample"))}"
          >Load sample</vaadin-button
        >
      </vaadin-form-item>
    `}__import(){const{value:t}=this.renderRoot.querySelector("vaadin-text-field");this.dispatchEvent(new CustomEvent("import-url",{detail:{value:t}}))}}customElements.define("external-input",i)}}]);
//# sourceMappingURL=8beefe935db901b84867.js.map