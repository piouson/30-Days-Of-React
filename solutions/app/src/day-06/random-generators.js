import { hexaColor } from "../day-04/hexadecimal-colors";
import { getColor } from "./number-colors";

export const numbers = (size) => {
  return Array.from(Array(size).keys())
    .map((key) => ({ value: key, color: getColor(key) }));
}

export const colors = (size) => {
  return Array.from(Array(size)).map(() => {
    const color = hexaColor();
    return ({
      value: color,
      color: color,
    })
  });
};
