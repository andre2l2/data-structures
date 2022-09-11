import { defaultToString, ValuePair } from '../../util';

export class Dictionary {
  private table!: Record<string, ValuePair>;

  constructor(private readonly _toStrFn: typeof defaultToString) {
    this.table = {};
  }

  hasKey(key: string): boolean {
    const element = this._toStrFn(key);
    return this.table[element] !== null;
  }

  set(key: string, value: unknown): boolean {
    if (key !== null && value !== null) {
      const tableKey = this._toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key: string): boolean {
    if (this.hasKey(key)) {
      const element = this._toStrFn(key);
      delete this.table[element];
      return true;
    }
    return false;
  }

  get(key: string) {
    const element = this._toStrFn(key);
    const valuePair = this.table[element];
    return valuePair === null ? undefined : valuePair.value;
  }

  keyValues(): Array<ValuePair> {
    return Object.values(this.table);
  }

  keys(): Array<string> {
    return this.keyValues().map((e) => e.key);
  }

  values(): Array<unknown> {
    return this.keyValues().map((e) => e.value);
  }

  size(): number {
    return Object.keys(this.table).length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.table = {};
  }

  toString(): string {
    if (this.isEmpty()) return '';
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}
