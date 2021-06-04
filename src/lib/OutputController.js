export class OutputController {
  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  updateValue(value) {
    this.value = value;
    this.host.requestUpdate();
  }
}
