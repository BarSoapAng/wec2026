import { deviceBreakpoints, TDeviceType } from "src/lib/responsive";
import { useWindowSize } from "src/lib/useWindowSize";

/**
 * A hook to determine the type of device the app is running on, based on the screen size.
 * @returns whether or not the screen is of type `device` or a list of all possible devices sorted descending by size
 */
export function useDeviceSize(device: TDeviceType): boolean | undefined;
export function useDeviceSize(width: number): boolean | undefined;
export function useDeviceSize(): TDeviceType[] | undefined;
export function useDeviceSize(
  deviceOrWidth?: TDeviceType | number
): boolean | TDeviceType[] | undefined {
  const { windowWidth } = useWindowSize();

  if (windowWidth === undefined) {
    return windowWidth;
  }

  if (typeof deviceOrWidth === "number") {
    const width = deviceOrWidth;
    return windowWidth <= width;
  }

  if (deviceOrWidth) {
    const device = deviceOrWidth;
    return windowWidth <= deviceBreakpoints[device];
  }

  return Object.entries(deviceBreakpoints)
    .filter(([, width]) => windowWidth <= width)
    .map(([device]) => device) as TDeviceType[];
}
