import type { PinId } from "./id";

export enum PinDirection {
  Input = "input",
  Output = "output",
}

export enum PinSignal {
  Low = "low",
  High = "high",
  Floating = "floating",
}

export interface Pin {
  id: PinId;
  label: string;
  direction: PinDirection;
  signal: PinSignal;
}
