import type { Pin } from "./pin";
import type { Version } from "./version";

export interface ComponentDefinition {
  id: string;
  label: string;
  version: Version;
  pins: Pin[];
}

export interface ComponentInstance {
  id: string;
  definitionId: string;
  definitionVersion: Version;
}
