export interface App {
  run(): void;
  destroy(): void;
}

export class CircuitApp implements App {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  run(): void {
    console.log("Running...");
  }

  destroy(): void {
    console.log("Destroying...");
  }
}
