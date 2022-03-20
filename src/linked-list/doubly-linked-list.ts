import LinkedList from './linkedList';
import { defaultEquals } from '../util';

class DoublyLinkedList extends LinkedList {
    private readonly _tail: any;
    private readonly _equalFn: any;

    constructor() {
        super();
        this._equalFn = defaultEquals;
        this._tail = undefined;
    }
}
