export class ValuePair {
  constructor(readonly key: string, readonly value: unknown) {}

  toString(): string {
    return `[#${this.key}: ${this.value}]`;
  }
}
