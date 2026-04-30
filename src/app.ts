import { PixiRenderer } from "./renderer/pixi-renderer";
import type { Renderer } from "./renderer/renderer";

export interface App {
  run(): void;
  destroy(): void;
}

export class CircuitApp implements App {
  private container: HTMLElement;
  private renderer: Renderer;

  constructor(container: HTMLElement) {
    this.container = container;
    this.renderer = new PixiRenderer();
  }

  run(): void {
    this.renderer.init(this.container);
  }

  destroy(): void {
    this.renderer.destroy();
  }
}
