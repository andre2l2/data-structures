import StackObject from '../src/stack/stack-object';

test('Add elements and test soze', () => {
    const stack = new StackObject();
    stack.push('One');
    stack.push('Two');
    expect(stack.suze()).toBe(2);
});

test('Add elements and test toString', () => {
    const stack = new StackObject();
    stack.push('One');
    stack.push('Two');
    stack.push('Three');
    expect(stack.toString()).toEqual('One Two Three ');
});

test('Add elements and remove one', () => {
    const stack = new StackObject();
    stack.push('One');
    stack.push('Two');
    stack.push('Three');
    stack.push('Four');
    expect(stack.pop()).toEqual('Four');
});

test('Add elements and check if has elements', () => {
    const stack = new StackObject();
    stack.push('One');
    stack.push('Two');
    stack.push('Three');
    expect(stack.isEmpty()).toBe(false);
});

test('isEmpity is true', () => {
    const stack = new StackObject();
    expect(stack.isEmpty()).toBe(true);
});

test('clear all', () => {
    const stack = new StackObject();
    stack.push('One');
    stack.push('Two');
    stack.push('Three');
    stack.push('Four');
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
});

test('get lest element', () => {
    const stack = new StackObject();
    stack.push('One');
    stack.push('Two');
    stack.push('Three');
    stack.push('Four');
    expect(stack.peek()).toEqual('Four');
});
