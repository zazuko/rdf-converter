export class OutputController {
  get prefixes() {
    return [...this.__prefixes.values()];
  }

  constructor(host, { prefixes = [] } = {}) {
    this.host = host;
    this.__prefixes = new Set(prefixes);
    host.addController(this);
  }

  updateValue(value) {
    this.value = value;
    this.host.requestUpdate();
  }

  addPrefix(prefix) {
    this.__prefixes.add(prefix);
    this.host.requestUpdate();
  }

  removePrefix(prefix) {
    this.__prefixes.delete(prefix);
    this.host.requestUpdate();
  }
}
