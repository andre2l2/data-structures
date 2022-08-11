import Queue from '../src/queue/queue';

describe('Queue', () => {
  let spy: Queue;

  beforeEach(() => {
    spy = new Queue();

    spy.enqueue('One');
    spy.enqueue('Two');
    spy.enqueue('Three');
    spy.enqueue('Four');
  });

  test('Add in queue and tesy size', () => {
    expect(spy.size()).toBe(4);
  });

  test('Add and test isEmpity', () => {
    expect(spy.isEmpity()).toBe(false);
  });

  test('Remove items', () => {
    spy.dequeue();
    expect(spy.size()).toBe(3);
  });

  test('Get peek item', () => {
    expect(spy.peek()).toEqual('One');
  });

  test('Get toString', () => {
    expect(spy.toString()).toEqual('One Two Three Four ');
  });
});
