class Queue {
    private _count = 0;
    private _lowestCount = 0;
    private _items: any = {};

    constructor() {
        this.clear();
    }

    enqueue(element: string): void {
        this._items[this._count] = element;
        this._count++;
    }

    dequeue(): string | undefined {
        if (this.isEmpity()) return undefined;
        const element = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return element;
    }

    peek(): string {
        return this._items[this._lowestCount];
    }

    isEmpity(): boolean {
        return this._count === this._lowestCount;
    }

    size(): number {
        if (this.isEmpity()) return 0;
        return this._count - this._lowestCount;
    }

    clear(): void {
        this._count = 0;
        this._lowestCount = 0;
        this._items = {};
    }

    toString(): string {
        if (this.isEmpity()) return '';

        let str = '';
        for (let c = this._lowestCount; c < this._count; c++) {
            str += `${this._items[c]}` + ' ';
        }

        return str;
    }
}

export default Queue;
