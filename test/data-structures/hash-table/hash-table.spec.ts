import { HashTable } from '../../../src/data-structures/hash-table/hash-table';
import { defaultToString } from '../../../src/util';

describe('HashTable', () => {
  let spy: HashTable;

  beforeEach(() => {
    spy = new HashTable(defaultToString);
  });

  describe('#hashCode', () => {
    test('should retrun hash number 2', () => {
      const resp = spy.hashCode('hello');
      expect(resp).toEqual(2);
    });

    test('should retrun hash number 10', () => {
      const resp = spy.hashCode('foo');
      expect(resp).toEqual(10);
    });

    test('should retrun hash number 10', () => {
      const resp = spy.hashCode('bar');
      expect(resp).not.toEqual(10);
    });
  });

  describe('#put', () => {
    test('should retrun true after insert a value', () => {
      const resp = spy.put('bar', 'bar@gmail.com');
      expect(resp).toBeTruthy();
    });

    test('should not retrun false after insert a value', () => {
      const resp = spy.put('bar', 'bar@gmail.com');
      expect(resp).not.toBeFalsy();
    });

    test('should false if value equal null', () => {
      const resp = spy.put('bar', null);
      expect(resp).toBeFalsy();
    });
  });

  describe('#get', () => {
    test('should retrun a value pair', () => {
      spy.put('foo', 'foo@gmail.com');

      const resp = spy.get('foo');
      expect(resp).toEqual('foo@gmail.com');
    });

    test('should not retrun a value pair', () => {
      spy.put('foo', 'foo@gmail.com');

      const resp = spy.get('foo');
      expect(resp).not.toEqual('bar@gmail.com');
    });

    test('should retrun undefined if you try get a empty value', () => {
      const resp = spy.get('foo');
      expect(resp).toBeUndefined();
    });

    test('should not retrun undefined if you try get a empty value', () => {
      spy.put('foo', 'foo@gmail.com');

      const resp = spy.get('foo');
      expect(resp).not.toBeUndefined();
    });
  });

  describe('#remove', () => {
    test('should be retrun true after remove an item', () => {
      spy.put('foo', 'foo@gmail.com');

      const resp = spy.remove('foo');
      expect(resp).toBeTruthy();
    });

    test('should be retrun false item not found', () => {
      const resp = spy.remove('foo');
      expect(resp).toBeFalsy();
    });

    test('should be not retrun false item not found', () => {
      spy.put('foo', 'foo@gmail.com');

      const resp = spy.remove('foo');
      expect(resp).not.toBeFalsy();
    });
  });

  describe('#clear', () => {
    test('should retrun true after clear all values', () => {
      spy.put('foo', 'foo@gmail.com');
      spy.put('bar', 'bar@gmail.com');

      expect(spy.clear()).toBeTruthy();
      expect(spy.isEmpty()).toBeTruthy();
    });

    test('should not retrun false after clear all values', () => {
      spy.put('foo', 'foo@gmail.com');
      spy.put('bar', 'bar@gmail.com');

      const resp = spy.clear();
      expect(resp).not.toBeFalsy();
    });
  });

  describe('#isEmpty', () => {
    test('should retrun true if table is empty', () => {
      const resp = spy.isEmpty();
      expect(resp).toBeTruthy();
    });

    test('should not retrun true if table is empty', () => {
      spy.put('bar', 'bar@gmail.com');

      const resp = spy.isEmpty();
      expect(resp).not.toBeTruthy();
    });

    test('should retrun false if table has data', () => {
      spy.put('bar', 'bar@gmail.com');

      const resp = spy.isEmpty();
      expect(resp).toBeFalsy();
    });

    test('should not retrun false if table has data', () => {
      spy.put('bar', 'bar@gmail.com');

      const resp = spy.isEmpty();
      expect(resp).not.toBeTruthy();
    });
  });

  describe('#toString', () => {
    test('should retrun table to string value', () => {
      spy.put('foo', 'foo@gmail.com');
      spy.put('bar', 'bar@gmail.com');

      const resp = spy.toString();
      expect(resp).toStrictEqual(`{10 => [#foo: foo@gmail.com]}\n{35 => [#bar: bar@gmail.com]}`);
    });

    test('should not retrun table to string value', () => {
      spy.put('foo', 'foo@gmail.com');
      spy.put('bar', 'bar@gmail.com');

      const resp = spy.toString();
      expect(resp).not.toStrictEqual('');
    });
  });
});
