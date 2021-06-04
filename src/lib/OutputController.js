export class OutputController {
  constructor(host, { prefixes = [] } = {}) {
    this.host = host;
    this.prefixes = prefixes;
    host.addController(this);
  }

  updateValue(value) {
    this.value = value;
    this.host.requestUpdate();
  }
}
