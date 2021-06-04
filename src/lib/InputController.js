export class InputController {
  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  hostConnected() {
    import("tbbt-ld/dist/tbbt.nq").then(async tbbt => {
      this.value = tbbt.default;
      this.format = "application/n-quads";

      await this.host.inputEditorReady;
      this.host.requestUpdate();
    });
  }
}
