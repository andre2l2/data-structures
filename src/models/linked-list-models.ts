export type Element = string | number;

export class Node {
    public element: Element;
    public prev: any;
    public next: any;

    constructor(element: Element, next?: any) {
        this.element = element;
        this.next = next;
    }
}

export class DoublyNode extends Node {
    constructor(element: Element) {
        super(element);
    }
}
