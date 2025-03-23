import { expect, it, describe } from 'vitest';
import { add } from '../add';

describe('Add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
