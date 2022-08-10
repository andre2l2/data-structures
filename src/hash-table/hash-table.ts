import { defaultToString, ValuePair } from '@/util';

export class HashTable {
  private table!: Record<string, ValuePair>;

  constructor(private readonly toStrFn: typeof defaultToString) {
    this.table = {};
  }

  private loseLoseHashCode(key: string) {
    const tableKey = this.toStrFn(key);

    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(0);
    }
    return hash % 37;
  }

  hashCode(key: string) {
    return this.loseLoseHashCode(key);
  }

  put(key: string, value: unknown): boolean {
    if (key === null && value === null) return false;

    const position = this.hashCode(key);
    this.table[position] = new ValuePair(key, value);
    return true;
  }

  get(key: string): unknown {
    const position = this.hashCode(key);
    const valuePair = this.table[position];
    return valuePair === null ? undefined : valuePair.value;
  }

  remove(key: string): boolean {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair !== null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  getTable(): Record<string, ValuePair> {
    return this.table;
  }
}
