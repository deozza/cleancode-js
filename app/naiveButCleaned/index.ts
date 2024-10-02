export const cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const cardSuits = ['♠', '♣', '♥', '♦'];
export let deck: any[] = [];
export let hand: any[] = [];
export let discard: any[] = [];

export function generateDeck(cardRanks: Array<string>, cardSuits: Array<string>) {
    cardRanks.forEach(rank => {
        cardSuits.forEach(suit => {
            addCardToDeck({ rank, suit });
        });
    });
}

export function resetDeck() {
    deck = [];
}

export function addCardToDeck(card: any) {
    if(checkCardIsValid(card) === false) {
        return;
    }
    
    deck.push(card);
}

export function checkCardIsValid(card: any): boolean {
    if(Array.isArray(card)) {
        return false;
    }

    const notAllowedTypes = ['number', 'string', 'boolean'];
    if(notAllowedTypes.includes(typeof card)) {
        return false;
    }

    return true;
}

export function shuffleDeck() {
    return deck.sort(() => Math.random() - 0.5);
}

export function getTopCardFromDeck() {
    if(isDeckEmpty()) {
        throw new Error('Deck is empty');
    }
    return deck.shift();
}

export function isDeckEmpty(): boolean {
    return deck.length === 0;
}

export function drawCard() {
    try {
        const card = getTopCardFromDeck();
        hand.push(card);
        return card;
    }catch(e) {
        console.error(e);
    }
}

export function discardCard() {
    try {
        const card = getTopCardFromDeck();
        discard.push(card);
        return card;
    }catch(e) {
        console.error(e);
    }
}

export function main() {

    console.log('default deck : ', deck);

    generateDeck(cardRanks, cardSuits);

    console.log('deck after generation : ', deck);

    shuffleDeck();

    console.log('deck after shuffling : ', deck);

    console.log(drawCard());
    console.log('deck after drawing card : ', deck);
    console.log('hand : ', hand);

    console.log(discardCard());
    console.log('deck after discarding card : ', deck);
    console.log('discard : ', discard);

}