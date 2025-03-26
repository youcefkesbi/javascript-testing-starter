import { describe, test, it, expect } from "vitest";
import { sum, max, fizzBuzz } from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    })

    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2);
    })

    it('should return the first argument if the arguments are equal', () => {
        expect(max(1, 1)).toBe(1);
    })
})

describe('fizzBuzz', () => {
    it('shoulld return FizzBuzz if arg is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('shoulld return Fizz if arg is only divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    })
    it('shoulld return Buzz if arg is only divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })
})