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
    private equalFn = defaultEquals;

    constructor() {
        this.count = 0;
        this.head = null;
    }
    getElementAt(index: number) {
        throw new Error('Method not implemented.');
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

    insert(element: Element, position: number): boolean {
        if (position >= 0 && position <= this.count) {
            const node = new Node(element);
            if (position === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previus: any = this._getElementAt(position - 1);
                const current: any = previus.next;
                node.next = current;
                previus.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    remove(element: Element) {
        const index: number = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element: Element): number {
        let current: any = this.head;
        for (let i = 0; i < this.count && current !== null; i++) {
            if (this.equalFn<string | number>(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

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

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    getHead(): unknown {
        return this.head;
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

export default LinkedList;
