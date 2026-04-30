import type { BoardId, PinId } from "../id";

export interface ConnectPinsPayload {
  boardId: BoardId;
  driverPinId: PinId;
  receiverPinId: PinId;
}
