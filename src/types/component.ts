import type { ComponentDefinitionId, ComponentInstanceId } from "./id";
import type { Pin } from "./pin";
import type { Version } from "./version";

export interface ComponentDefinition {
  id: ComponentDefinitionId;
  label: string;
  version: Version;
  pins: Pin[];
}

export interface ComponentInstance {
  id: ComponentInstanceId;
  definitionId: ComponentDefinitionId;
  definitionVersion: Version;
}
