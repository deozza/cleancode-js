import { expect, test, describe } from 'vitest'
import { addCardToDeck, checkCardIsValid, deck, generateDeck, resetDeck } from './index'

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

        resetDeck();
    });
});

describe('Tests for generateDeck', () => {
    test("adds cards in deck according to ranks and suits", () => {
        const ranks = ['1', "2", "3"];
        const suits = ['a', 'b'];

        const expectedDeckLength = ranks.length * suits.length;

        generateDeck(ranks, suits);

        expect(deck.length).toBe(expectedDeckLength);

        resetDeck();
    });

    test("adds cards in deck according to ranks and suits", () => {
        const ranks = ['1', "2", "3"];
        const suits = ['a', 'b'];

        const expectedDeck = [
            {rank: '1', suit: 'a'},
            {rank: '1', suit: 'b'},
            {rank: '2', suit: 'a'},
            {rank: '2', suit: 'b'},
            {rank: '3', suit: 'a'},
            {rank: '3', suit: 'b'},
        ];

        generateDeck(ranks, suits);

        expect(deck).toEqual(expectedDeck);

        resetDeck();
    });
});