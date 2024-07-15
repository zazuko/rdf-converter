import { lazySink } from "@zazuko/formats-lazy/LazySink.js";
import formats from "@rdfjs-elements/formats-pretty";

formats.parsers.set(
  "text/html",
  new (lazySink(async () => {
    const { RdfaParser } = await import("rdfa-streaming-parser");
    return RdfaParser;
  }))({ contentType: "text/html" })
);
