// LISTA LIGADA (linked list)

import { defaultEquals } from "../util";
import { Node, Element } from "../models/linked-list-models";

interface LinkedListClass {
    push(element: Element): any;
    insert(element: Element, position: any): any;
    getElementAt(index: number): any;
    remove(element: Element): any;
    indexOf(element: Element): any;
    removeAt(element: Element): any;
}

class LinkedList implements LinkedListClass {
    private count: number;
    private head: Node | null;
    private equalFn: any;

    constructor() {
        this.count = 0;
        this.head = null;
        this.equalFn = undefined;
    }

    push(element: Element) {
        const node: Node = new Node(element);
        let current: Node;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    insert(element: Element, position: any) {}

    getElementAt(index: number) {}

    remove(element: Element) {}

    indexOf(element: Element) {}

    removeAt(index: number) {
        if (index >= 0 && index < this.count) {
            let current: any = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                let previus = undefined;
                for (let i = 0; i < index; i++) {
                    previus = current;
                    current = current.next;
                }
                previus.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

export default LinkedList;
