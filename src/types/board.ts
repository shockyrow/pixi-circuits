import type { ComponentDefinition, ComponentInstance } from "./component";
import type { Net } from "./net";

export interface Board {
  id: string;
  label: string;
  definition: ComponentDefinition;
  instances: ComponentInstance[];
  nets: Net[];
}
