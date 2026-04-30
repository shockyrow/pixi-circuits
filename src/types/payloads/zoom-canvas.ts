import type { Position } from "../position";

export interface ZoomCanvasPayload {
  scale: number;
  focalPoint: Position;
}
