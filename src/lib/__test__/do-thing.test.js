import doThing from '../do-thing';

describe('doThing', () => {
  test('does thing', () => {
    const actual = doThing();
    const expected = 'success';
    expect(actual).toEqual(expected);
  });
});
