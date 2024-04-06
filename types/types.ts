import { RESET } from "jotai/utils";

export type SetAtom<Args extends any[], Result> = (...args: Args) => Result;
export type SetStateActionWithReset<Value> =
  | Value
  | typeof RESET
  | ((prev: Value) => Value | typeof RESET);
export type SetHashAtom<T> = SetAtom<[SetStateActionWithReset<T>], void>;

export interface SSRType {
  isLogin: boolean;
  url: string;
}
