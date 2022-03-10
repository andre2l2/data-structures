interface IDeque {
    readonly isEmpity: () => boolean;
    readonly size: () => number;
    readonly clear: () => void;
    readonly toString: () => string;
    readonly addFront: (element: string) => void;
    readonly addBack: (element: string) => void;
    readonly removeFront: () => string | undefined;
    readonly removeBack: () => string | undefined;
    readonly peekFront: () => string;
    readonly peekBack: () => string;
}

class Deque implements IDeque {
    private _count = 0;
    private _lowestCount = 0;
    private _items: any = {};

    constructor() {
        this.clear();
    }

    isEmpity(): boolean {
        return this._count === this._lowestCount;
    }

    size(): number {
        if (this.isEmpity) return 0;
        return this._count - this._lowestCount;
    }

    clear(): void {
        this._count = 0;
        this._lowestCount = 0;
        this._items = {};
    }

    toString(): string {
        let str = '';
        for (let c = this._lowestCount; c < this._count; c++) {
            str += `${this._items[c]}` + ' ';
        }
        return str;
    }

    addFront(element: string): void {
        if (this.isEmpity) {
            this.addBack(element);
        } else if (this._lowestCount > 0) {
            this._lowestCount--;
            this._items[this._lowestCount] = element;
        } else {
            for (let c = this._count; c > 0; c--) {
                this._items[c] = this._items[c - 1];
            }
            this._count++;
            this._lowestCount = 0;
            this._items[0] = element;
        }
    }

    addBack(element: string): void {
        this._items[this._count] = element;
        this._count++;
    }

    removeFront(): string | undefined {
        if (this.isEmpity) return undefined;
        const element = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return element;
    }

    removeBack(): string | undefined {
        if (this.isEmpity) return undefined;
        const element = this._items[this._count - 1];
        delete this._items[this._count];
        this._count--;
        return element;
    }

    peekFront(): string {
        return this._items[this._lowestCount];
    }

    peekBack(): string {
        return this._items[this._count - 1];
    }
}

export default Deque;
