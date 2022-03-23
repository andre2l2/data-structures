import DoublyLinkedList from '../src/linked-list/doubly-linked-list';

const list = new DoublyLinkedList();
list.insert('A', 0);
list.insert('B', 1);
list.insert('C', 2);
list.insert('D', 0);

test('test size lsit', () => {
    expect(list.size()).toBe(4);
});

test('check if elemets is (D A B C)', () => {
    expect(list.toString()).toEqual('D A B C ');
});

test('test is Empty?', () => {
    expect(list.isEmpty()).toBe(false);
});
