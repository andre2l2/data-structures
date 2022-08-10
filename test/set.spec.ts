import { SetElements } from '@/set/set';

describe('SetElements', () => {
  let spy: SetElements;

  beforeEach(() => {
    spy = new SetElements();
  });

  describe('#add', () => {
    test('should retrun true after added 1 into the set', () => {
      const resp = spy.add(1);
      expect(resp).toBe(true);
    });

    test('should retrun true after added 1, 2, 3 into the set', () => {
      const resp = [spy.add(1), spy.add(2), spy.add(3)];
      expect(resp).toEqual([true, true, true]);
    });

    test('should retrun false if element exists', () => {
      spy.add(1);
      const resp = spy.add(1);
      expect(resp).toBe(false);
    });
  });

  describe('#toString', () => {
    test('should retrun string element', () => {
      spy.add(1);
      spy.add(2);
      const resp = spy.toString();
      expect(resp).toEqual('{"1":1,"2":2}');
    });

    test('should not return string element', () => {
      spy.add(1);
      spy.add(2);
      const resp = spy.toString();
      expect(resp).not.toEqual('1, 2');
    });
  });

  describe('#size', () => {
    test('should retrun 3 elements', () => {
      spy.add('a');
      spy.add('b');
      spy.add('c');

      const resp = spy.size();
      expect(resp).toBe(3);
    });

    test('should retrun 3 elements', () => {
      spy.add(1);
      spy.add(2);
      spy.add(3);
      spy.add(3);

      const resp = spy.size();
      expect(resp).toBe(3);
    });

    test('should not retrun 2 elements', () => {
      spy.add('a');
      spy.add('b');
      spy.add('c');

      const resp = spy.size();
      expect(resp).not.toBe(2);
    });
  });

  describe('#values', () => {
    test('should retrun values into the set', () => {
      spy.add('a');
      spy.add('b');
      spy.add('c');

      const resp = spy.values();
      expect(resp).toEqual(['a', 'b', 'c']);
    });

    test('should not retrun values into the set', () => {
      spy.add('a');
      spy.add('b');
      spy.add('c');

      const resp = spy.values();
      expect(resp).not.toEqual([]);
    });
  });

  describe('#has', () => {
    test('should retrun true if element exists into the set', () => {
      spy.add('a');
      spy.add('b');
      spy.add('c');

      const resp = spy.has('b');
      expect(resp).toBe(true);
    });

    test('should not retrun true if element exists into the set', () => {
      spy.add('a');
      spy.add('b');
      spy.add('c');

      const resp = spy.has('b');
      expect(resp).not.toBe(false);
    });

    test('should retrun false if element not exists into the set', () => {
      spy.add('a');
      spy.add('b');
      spy.add('c');

      const resp = spy.has('e');
      expect(resp).toBe(false);
    });
  });

  describe('#delete', () => {
    test('should retrun true if element was deleted', () => {
      spy.add(1);
      spy.add(2);
      spy.add(3);

      expect(spy.delete(3)).toBe(true);
      expect(spy.values()).toEqual([1, 2]);
    });

    test('should retrun false if element was not founded', () => {
      spy.add(1);
      spy.add(2);
      spy.add(3);

      expect(spy.delete(4)).toBe(false);
      expect(spy.values()).toEqual([1, 2, 3]);
    });
  });
});
