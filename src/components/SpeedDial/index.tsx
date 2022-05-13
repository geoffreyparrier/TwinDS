import { SpeedDialButton } from "./SpeedDialButton";
import { SpeedDialItem } from "./SpeedDialItem";

export type SeedDialCommonProps = {};

export const SpeedDial = Object.assign(SpeedDialButton, {
  Item: SpeedDialItem,
});
