(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{350:function(e,t,s){"use strict";s.r(t);var a=s(8),n=s(62),i=s(344);s(345),s(255),s(256);class r extends a.b{static get properties(){return{selected:{type:String}}}constructor(){super(),this.formats=[...n.parsers.keys()]}render(){return a.d`
      <vaadin-select
        label="Input format"
        value="${this.selected}"
        @value-changed="${this.__onFormatSelected}"
        ${Object(i.a)(this.__renderSelectItems)}
      >
      </vaadin-select>
    `}__onFormatSelected(e){this.selected=e.detail.value,this.dispatchEvent(new CustomEvent("selected-changed",{detail:e.detail}))}__renderSelectItems(){return a.d`
      <vaadin-list-box>
        ${this.formats.map(e=>a.d`
              <vaadin-item>${e}</vaadin-item>
            `)}
      </vaadin-list-box>
    `}}customElements.define("input-format",r)}}]);
//# sourceMappingURL=08d62734b698680d3775.js.map