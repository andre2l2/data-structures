import Queue from '../src/queue/queue';

test('Add in queue and tesy size', () => {
    const queue = new Queue();
    queue.enqueue('One');
    queue.enqueue('Two');
    queue.enqueue('Three');
    expect(queue.seze()).toBe(3);
});

test('Add and test isEmpity', () => {
    const queue = new Queue();
    queue.enqueue('One');
    queue.enqueue('Two');
    queue.enqueue('Three');
    expect(queue.isEmpity()).toBe(false);
});
