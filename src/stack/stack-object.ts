class StackObject {
  private _items: any = {};
  private _count: number = 0;

  constructor() {
    this._items = {};
    this._count = 0;
  }

  push(element: string): void {
    this._items[this._count] = element;
    this._count++;
  }

  suze(): number {
    return this._count;
  }

  isEmpty(): boolean {
    return this._count === 0;
  }

  peek(): string | undefined {
    if (this.isEmpty()) return undefined;
    return this._items[this._count - 1];
  }

  clear(): void {
    this._items = {};
    this._count = 0;
  }

  pop(): string | undefined {
    if (this.isEmpty()) return undefined;
    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];
    return result;
  }

  toString(): string {
    if (this.isEmpty()) return "";
    let obgString = "";
    for (let c = 0; c < this._count; c++) {
      obgString += `${this._items[c]} `;
    }

    return obgString;
  }
}

export default StackObject;
