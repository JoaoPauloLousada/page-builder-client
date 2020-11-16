import { mergeAll as rMergeAll } from "ramda";

export const mergeAll = (...objects: Array<object>): object =>
  rMergeAll(objects);
