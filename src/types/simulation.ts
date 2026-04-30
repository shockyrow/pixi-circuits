export interface SimulationController {
  pause(): void;
  resume(): void;
  stop(): void;
  restart(): void;
  step(): void;
}
