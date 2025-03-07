import { describe, test, it, expect } from "vitest";
import { sum, max } from "../src/intro";

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