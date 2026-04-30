import type { Board } from "../types/board";
import type { ComponentInstance } from "../types/component";
import type { BoardId, ComponentDefinitionId, ComponentInstanceId, PinId } from "../types/id";
import type { Net } from "../types/net";
import type { SimulationController } from "../types/simulation";

export interface Engine {
  placeComponent(boardId: BoardId, componentDefinitionId: ComponentDefinitionId): ComponentInstance;
  removeComponent(boardId: BoardId, componentInstanceId: ComponentInstanceId): ComponentInstance;
  connectPins(boardId: BoardId, driverPinId: PinId, receiverPinId: PinId): Net;
  disconnectPins(
    boardId: BoardId,
    driverPinId: PinId,
    receiverPinId: PinId,
  ): void;
  simulate(boardId: BoardId): SimulationController;
  reset(boardId: BoardId): void;
  createBoard(label: string): Board;
  loadBoard(data: unknown): Board;
  saveBoard(boardId: BoardId): unknown;
}
