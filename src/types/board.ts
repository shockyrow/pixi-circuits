import type { ComponentDefinition, ComponentInstance } from "./component";
import type { BoardId } from "./id";
import type { Net } from "./net";

export interface Board {
  id: BoardId;
  label: string;
  definition: ComponentDefinition;
  instances: ComponentInstance[];
  nets: Net[];
}
