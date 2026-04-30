export type InputEventType =
  | "input:panCanvas"
  | "input:zoomCanvas"
  | "input:placeComponent"
  | "input:selectComponent"
  | "input:deleteCompnent"
  | "input:connectPins";

export type SimulationEventType =
  | "simulation:stepped"
  | "simulation:completed"
  | "simulation:validationFailed";

export type BoardEventType = "board:updated" | "board:loaded" | "board:saved";

export type EventType = InputEventType | SimulationEventType | BoardEventType;
