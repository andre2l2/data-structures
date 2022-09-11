import { defaultToString, ValuePair } from '../../util';

export class HashTable {
  private table!: Record<string, ValuePair>;

  constructor(private readonly toStrFn: typeof defaultToString) {
    this.table = {};
  }

  private loseLoseHashCode(key: string): number {
    const tableKey = this.toStrFn(key);

    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(0);
    }
    return hash % 37;
  }

  hashCode(key: string): number {
    return this.loseLoseHashCode(key);
  }

  put(key: string, value: unknown): boolean {
    if (key === null || value === null) return false;

    const position = this.hashCode(key);
    this.table[position] = new ValuePair(key, value);
    return true;
  }

  get(key: string): unknown {
    const position = this.hashCode(key);
    const valuePair = this.table[position];
    return !valuePair ? undefined : valuePair.value;
  }

  remove(key: string): boolean {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair !== undefined) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  clear(): boolean {
    this.table = {};
    return true;
  }

  isEmpty(): boolean {
    return Object.values(this.table).length === 0;
  }

  toString(): string {
    if (this.isEmpty()) return '';
    const keys = Object.keys(this.table);
    let objectString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;

    for (let c = 1; c < keys.length; c++) {
      objectString = `${objectString}\n{${keys[c]} => ${this.table[keys[c]].toString()}}`;
    }

    return objectString;
  }
}
