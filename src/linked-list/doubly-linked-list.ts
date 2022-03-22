import LinkedList from './linkedList';
import { defaultEquals } from '../util';
import { Element, DoublyNode } from '../models/linked-list-models';

class DoublyLinkedList extends LinkedList {
    public equalFn: any;
    public tail: any;

    constructor() {
        super();
        this.equalFn = defaultEquals;
        this.tail = undefined;
        this.count = 0;
    }

    insert(element: Element, position: number): boolean {
        if (position >= 0 && position <= this.count) {
            const node = new DoublyNode(element);
            let current: any = this.head;

            if (position === 0) {
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (position === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previus: any = this.getElementAt(position - 1);
                current = previus.next;
                node.next = current;
                previus.next = node;
                current.next = node;
                node.prev = previus;
            }

            this.count++;
            return true;
        }

        return false;
    }
}

export default DoublyLinkedList;
