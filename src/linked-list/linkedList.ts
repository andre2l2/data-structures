// LISTA LIGADA (linked list)

import { defaultEquals } from '../util';
import { Node, Element } from '../models/linked-list-models';

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

    private _getElementAt(index: number) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node !== null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    push(element: Element): void {
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
                const previus: any = this._getElementAt(index);
                current = previus.next;
                previus.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    toString(): string {
        let str: string = '';
        for (let c = 0; c < this.count; c++) {
            const previus: any = this._getElementAt(c);
            str += previus.element + ' ';
        }
        return str;
    }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.toString());

export default LinkedList;
