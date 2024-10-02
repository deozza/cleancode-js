import { expect, test, describe } from 'vitest'
import { sum } from './Dummy'

describe('Dummy class is working', () => {
  test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    const expectedResult = 3;
    expect(result).toBe(expectedResult)
  })
});