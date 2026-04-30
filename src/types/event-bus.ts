import type { AppEvent } from "./event";

export interface EventBus {
  emit<T>(event: AppEvent<T>): void;
  subscribe<T>(type: string, listener: (event: AppEvent<T>) => void): string;
  unsubscribe(subscriptionId: string): void;
}
