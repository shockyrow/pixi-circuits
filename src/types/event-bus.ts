import type { AppEvent } from "./event";
import type { EventType } from "./event-type";
import type { SubscriptionId } from "./id";

export interface EventBus {
  emit<T>(event: AppEvent<T>): void;
  subscribe<T>(
    type: EventType,
    listener: (event: AppEvent<T>) => void,
  ): SubscriptionId;
  unsubscribe(subscriptionId: SubscriptionId): void;
}
