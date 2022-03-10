interface IStackArray {
    readonly push: (...rest: string[]) => void;
    readonly pop: () => string | undefined;
    readonly isEmpty: () => boolean;
    readonly peek: () => string;
    readonly clear: () => void;
    readonly size: () => number;
}

class StackArray implements IStackArray {
    private _items: string[];

    constructor() {
        this._items = [];
    }

    push(...rest: string[]): void {
        this._items.push(...rest);
    }

    pop(): string | undefined {
        return this._items.pop();
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    peek(): string {
        return this._items[this._items.length - 1];
    }

    clear(): void {
        this._items = [];
    }

    size(): number {
        return this._items.length;
    }
}

export default StackArray;
