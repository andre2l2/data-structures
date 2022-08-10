import { defaultToString } from '@/util';

describe('defaultToString', () => {
  let spy: typeof defaultToString;

  beforeEach(() => {
    spy = defaultToString;
  });

  test('should retrun NULL string', () => {
    const resp = spy(null);

    expect(resp).toEqual('NULL');
  });

  test('should retrun UNDEFINED string', () => {
    const resp = spy(undefined);

    expect(resp).toEqual('UNDEFINED');
  });

  test('should retrun hello string', () => {
    const resp = spy('hello');

    expect(resp).toEqual('hello');
  });

  test('should retrun 10 string', () => {
    const resp = spy(10);

    expect(resp).toEqual('10');
  });

  test('should retun object Object string', () => {
    const resp = spy({});

    expect(resp).toEqual('OBJECT');
  });

  test('should retun object Object string', () => {
    const resp = spy([]);

    expect(resp).toEqual('OBJECT');
  });
});
