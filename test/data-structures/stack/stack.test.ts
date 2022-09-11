import StackObject from '../../../src/data-structures/stack/stack-object';

describe('StackObject', () => {
  let spy: StackObject;

  beforeEach(() => {
    spy = new StackObject();

    spy.push('One');
    spy.push('Two');
    spy.push('Three');
    spy.push('Four');
  });

  test('Add elements and test soze', () => {
    expect(spy.suze()).toBe(4);
  });

  test('Add elements and test toString', () => {
    expect(spy.toString()).toEqual('One Two Three Four ');
  });

  test('Add elements and remove one', () => {
    expect(spy.pop()).toEqual('Four');
  });

  test('Add elements and check if has elements', () => {
    expect(spy.isEmpty()).toBe(false);
  });

  test('get lest element', () => {
    expect(spy.peek()).toEqual('Four');
  });

  test('isEmpity is true', () => {
    spy.pop();
    spy.pop();
    spy.pop();
    expect(spy.isEmpty()).toBe(false);
  });

  test('clear all', () => {
    spy.push('One');
    spy.clear();
    expect(spy.isEmpty()).toBe(true);
  });
});
