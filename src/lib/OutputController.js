export class OutputController {
  get prefixes() {
    return [...this.__prefixes.values()];
  }

  get customPrefixes() {
    return [...this.__customPrefixes].reduce((prefixes, [prefix, ns]) => {
      if (ns) {
        return { ...prefixes, [prefix]: ns };
      }

      return prefixes;
    }, {});
  }

  constructor(host, { prefixes = [], customPrefixes = {} } = {}) {
    this.host = host;
    this.__prefixes = new Set(prefixes);
    this.__customPrefixes = new Map(Object.entries(customPrefixes));
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

  setCustomPrefix(prefix, namespace) {
    this.__customPrefixes.set(prefix, namespace);
    this.host.requestUpdate();
  }
}
