import type { EventType } from "./event-type";

export interface AppEvent<T = unknown> {
  type: EventType;
  payload: T;
}
