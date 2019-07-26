import { distinct } from './distinct';

describe('distinct function', () => {
  const example = ['aa', 'bb', 'cc', 'aa', 'dd'];

  test('total number of distinct items is correct', () => {
    const { total } = distinct(example);
    expect(total).toEqual(4);
  });

  test('total number of entries in unique objects is correct', () => {
    const { unique } = distinct(example);
    const entries = Object.entries(unique);
    expect(entries.length).toEqual(4);
  });

  test('each unique item has its occurances tallied correctly', () => {
    const { unique } = distinct(example);
    const { aa, bb, cc, dd } = unique;
    expect(aa).toEqual(2);
    expect(bb).toEqual(1);
    expect(cc).toEqual(1);
    expect(dd).toEqual(1);
  });
});
