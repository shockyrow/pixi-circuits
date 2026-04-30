import type { ComponentDefinitionId } from "../id";
import type { Position } from "../position";

export interface PlaceComponentPayload {
  position: Position;
  componentDefinitionId: ComponentDefinitionId;
}
