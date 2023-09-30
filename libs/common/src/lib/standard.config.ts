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

export function initStandard(){
  BigInt.prototype.toJSON = function () { return `BIGINT::${this.toString()}`; };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EmptyObject = () => ({} as any);
