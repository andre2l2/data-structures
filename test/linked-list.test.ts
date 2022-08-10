import DoublyLinkedList from '@/linked-list/doubly-linked-list';

describe('DoublyLinkedList', () => {
  let spy: DoublyLinkedList;

  beforeEach(() => {
    spy = new DoublyLinkedList();

    spy.insert('A', 0);
    spy.insert('B', 1);
    spy.insert('C', 2);
    spy.insert('D', 0);
  });

  test('test size lsit', () => {
    expect(spy.size()).toBe(4);
  });

  test('check if elemets is (D A B C)', () => {
    expect(spy.toString()).toEqual('D A B C ');
  });

  test('test is Empty?', () => {
    expect(spy.isEmpty()).toBe(false);
  });
});
