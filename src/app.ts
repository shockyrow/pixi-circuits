import type { Renderer } from "./renderer/renderer";

export interface App {
  run(): Promise<void>;
  destroy(): void;
}

export class CircuitApp implements App {
  private container: HTMLElement;
  private renderer: Renderer;

  constructor(container: HTMLElement, renderer: Renderer) {
    this.container = container;
    this.renderer = renderer;
  }

  async run(): Promise<void> {
    await this.renderer.init(this.container);
  }

  destroy(): void {
    this.renderer.destroy();
  }
}
