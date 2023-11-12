export function BigIntModule(key: string, value: unknown) {
  if (typeof value === "string" && value.startsWith('BIGINT::')) {
    return BigInt(value.substring(8));
  }
  return value;
}

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

export function initStandard() {
  BigInt.prototype.toJSON = function () { return `BIGINT::${this.toString()}`; };
  const sourceParse = JSON.parse;
  JSON.parse = function (text, reviver) {
    return sourceParse(text, reviver ?? BigIntModule);
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EmptyObject = () => ({} as any);
