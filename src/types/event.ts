export interface AppEvent<T = unknown> {
  type: string;
  payload: T;
}
