import { parsers } from "@rdfjs-elements/formats-pretty";
import MediaType from "http-media-type";

export class InputController {
  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  async loadSample() {
    import("tbbt-ld/dist/tbbt.nq").then(async tbbt => {
      this.value = tbbt.default;
      this.format = "application/n-quads";

      this.host.requestUpdate();
    });
  }

  async loadInput(uri) {
    const accept = [this.format, ...parsers.keys()].join(",");

    const response = await fetch(uri, {
      accept
    });

    this.value = await response.text();
    const contentTypeHeader = response.headers.get("content-type");
    if (contentTypeHeader) {
      const contentType = MediaType.parse(contentTypeHeader, () => undefined);
      this.format = contentType.formatted;
    }

    this.host.requestUpdate();
  }

  async setFormat(format) {
    this.format = format;
    this.host.requestUpdate();
  }
}
