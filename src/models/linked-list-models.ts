export type Element = string | number;

export class Node {
    public element: Element;
    public next: any;

    constructor(element: Element, next?: any) {
        this.element = element;
        this.next = next;
    }
}

class DoublyNode extends Node {
    private readonly _prev;

    constructor(element, next, prev) {
        super(element, next);
        this._prev = prev;
    }
}
