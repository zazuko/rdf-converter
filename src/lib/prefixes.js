import knownPrefixes from "@zazuko/rdf-vocabularies/prefixes";

const prefixesReversed = Object.entries(knownPrefixes).map(([k, v]) => [v, k]);

export const namespaceMap = new Map(prefixesReversed);

export function extractPrefix(term) {
  if (term.termType === "NamedNode") {
    return prefixesReversed.find(([ns]) => term.value.startsWith(ns))?.[1];
  }

  return undefined;
}
