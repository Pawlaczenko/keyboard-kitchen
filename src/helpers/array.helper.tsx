import { DISHES } from "../data/dishes";

export function findNextId(arr: number[]): number {
  const set = new Set(arr);

  for (let i = 1; i <= arr.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return arr.length + 1;
}