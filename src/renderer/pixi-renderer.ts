import { Application } from "pixi.js";
import type { Renderer } from "./renderer";
import type { Board } from "../types/board";

export class PixiRenderer implements Renderer {
  private app: Application;

  constructor() {
    this.app = new Application();
  }

  init(container: HTMLElement): Promise<void> {
    this.app.init({ resizeTo: container });
    container.appendChild(this.app.canvas);
  }

  markDirty(): void {
    throw new Error("Not implemented!");
  }

  drawBoard(board: Board): void {
    throw new Error("Not implemented!");
  }

  destroy(): void {
    this.app.destroy();
  }
}
