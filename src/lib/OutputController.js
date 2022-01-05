import knownPrefixes from "@zazuko/rdf-vocabularies/prefixes";
import { namespaceMap } from "./prefixes.js";

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

  constructor(host) {
    this.host = host;
    this.__prefixes = new Set();
    this.__customPrefixes = new Map();
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

  setPrefixes(prefixes) {
    this.__prefixes.clear();
    this.__customPrefixes.clear();

    this.addPrefixes(prefixes);
  }

  addPrefixes(prefixes) {
    for (const [prefix, namespaceOrString] of Object.entries(prefixes)) {
      const namespace =
        typeof namespaceOrString === "string"
          ? namespaceOrString
          : namespaceOrString.value;

      if (prefix in knownPrefixes) {
        this.addPrefix(prefix);
      } else if (namespaceMap.has(namespace)) {
        this.addPrefix(namespaceMap.get(namespace));
      } else {
        this.setCustomPrefix(prefix, namespace);
      }
    }
  }
}
