export type Element = string | number;

export class Node {
    public element: Element;
    public next: any;

    constructor(element: Element) {
        this.element = element;
    }
}
