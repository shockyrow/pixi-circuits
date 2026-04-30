import type { Board } from "../types/board";

export interface Renderer {
  init(container: HTMLElement): Promise<void>;
  drawBoard(board: Board): void;
  markDirty(): void;
  destroy(): void;
}
