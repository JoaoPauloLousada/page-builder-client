import { mergeAll as rMergeAll } from "ramda";

export const mergeAll = (...objects: Array<object>): object => {
  console.log("mergeAll", objects);
  return rMergeAll(objects);
};
