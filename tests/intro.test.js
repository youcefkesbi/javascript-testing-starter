import { describe, test, it, expect } from "vitest";
import { sum, max, fizzBuzz, testingFactorial } from "../src/intro";

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
    it('shoulld return arg as a string if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    })
})

describe('testingFactorial', () => {
    it('should return 1 if arg is 0 or 1', () => {
        expect(testingFactorial(0)).toBe(1)
        expect(testingFactorial(1)).toBe(1)
    })
    it('should return factorial of n if arg is greater than 1', () => {
        expect(testingFactorial(3)).toBe(6)
    }) 
})