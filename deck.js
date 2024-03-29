const NAMES = ["UC Santa Cruz Arboretum", 
                "UC Santa Cruz Entrance", 
                "Santa Cruz Lighthouse", 
                "Surfer Dude Statue",
                "Santa Cruz Bell Tower"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }
}

function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}