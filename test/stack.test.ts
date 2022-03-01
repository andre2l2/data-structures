import StackObject from '../src/stack/stack-object';

const stack = new StackObject();
stack.push('One');
stack.push('Two');
stack.push('Three');
stack.push('Four');

test('Add elements and test soze', () => {
    expect(stack.suze()).toBe(4);
});

test('Add elements and test toString', () => {
    expect(stack.toString()).toEqual('One Two Three Four ');
});

test('Add elements and remove one', () => {
    expect(stack.pop()).toEqual('Four');
});

test('Add elements and check if has elements', () => {
    expect(stack.isEmpty()).toBe(false);
});

test('get lest element', () => {
    expect(stack.peek()).toEqual('Three');
});

test('isEmpity is true', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
});

test('clear all', () => {
    stack.push('One');
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
});
