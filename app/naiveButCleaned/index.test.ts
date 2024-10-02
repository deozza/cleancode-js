import { expect, test, describe } from 'vitest'
import { addCardToDeck, checkCardIsValid, deck } from './index'

describe('Tests for checkCardIsValid', () => {
    test("card should not be a number", () => {
        const card = 1;

        const result = checkCardIsValid(card);

        expect(result).toBe(false);
    });

    test("card should not be a string", () => {
        const card = "string";

        const result = checkCardIsValid(card);

        expect(result).toBe(false);
    });

    test("card should not be an array", () => {
        const card = [];

        const result = checkCardIsValid(card);

        expect(result).toBe(false);
    });

    test("card should not be a boolean", () => {
        const card = false;

        const result = checkCardIsValid(card);

        expect(result).toBe(false);
    });
});

describe('Tests for addCardToDeck', () => {
    test('can add valid card', () => {
        expect(deck.length).toBe(0);

        const card = {rank: 'A', suit: '♠'};

        addCardToDeck(card);

        expect(deck.length).toBe(1);
    });
});