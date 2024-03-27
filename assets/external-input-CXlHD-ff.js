import{s as e,x as a}from"./index-BiQKaKqB.js";import"./input-field-container-styles-wCIB69et.js";import"./vaadin-text-field-CB5taJP-.js";class i extends e{render(){return a`
      <vaadin-text-field label="Input from URL"></vaadin-text-field>
      <vaadin-button @click="${this.__import}">Load resource</vaadin-button>
      <vaadin-form-item label-position="top">
        <label slot="label">Sample n-quads resource</label>
        <vaadin-button
          @click="${()=>this.dispatchEvent(new Event("load-sample"))}"
          >Load sample</vaadin-button
        >
      </vaadin-form-item>
    `}__import(){const{value:t}=this.renderRoot.querySelector("vaadin-text-field");this.dispatchEvent(new CustomEvent("import-url",{detail:{value:t}}))}}customElements.define("external-input",i);
