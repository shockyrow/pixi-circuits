import type { NetId, PinId } from "./id";

export interface Net {
  id: NetId;
  driverPinId: PinId;
  receiverPinIds: PinId[];
}
