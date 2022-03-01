import Queue from '../src/queue/queue';

const queue = new Queue();
queue.enqueue('One');
queue.enqueue('Two');
queue.enqueue('Three');
queue.enqueue('Four');

test('Add in queue and tesy size', () => {
    expect(queue.size()).toBe(4);
});

test('Add and test isEmpity', () => {
    expect(queue.isEmpity()).toBe(false);
});

test('Remove items', () => {
    queue.dequeue();
    expect(queue.size()).toBe(3);
});

test('Get peek item', () => {
    expect(queue.peek()).toEqual('Two');
});

test('Get toString', () => {
    expect(queue.toString()).toEqual('Two Three Four ');
});
