import type { Board } from "../types/board";
import type { ComponentInstance } from "../types/component";
import type { Net } from "../types/net";
import type { SimulationController } from "../types/simulation";

export interface Engine {
    placeComponent(boardId: string, definitionId: string): ComponentInstance;
    removeComponent(boardId: string, instanceId: string): ComponentInstance;
    connectPins(boardId: string, driverPinId: string, receiverPinId: string): Net;
    disconnectPins(boardId: string, driverPinId: string, receiverPinId: string): void;
    simulate(boardId: string): SimulationController;
    reset(boardId: string): void;
    createBoard(label: string): Board;
    loadBoard(data: unknown): Board;
    saveBoard(boardId: string): unknown;
}
