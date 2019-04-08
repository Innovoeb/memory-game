// array of card objects
var cardArr = [
  {
    name: "ackbar",
    image: './assets/ackbar.jpg',

  },
  {
    name: "boba",
    image: './assets/boba.jpg',

  },
  {
    name: "c3po",
    image: './assets/c3po.jpg',

  },
  {
    name: "chewie",
    image: './assets/chewie.jpg',

  },
  {
    name: "darth",
    image: './assets/darth.jpg',

  },
  {
    name: "greedo",
    image: './assets/greedo.jpg',

  },
  {
    name: "han",
    image: './assets/han.jpg',

  },
  {
    name: "leia",
    image: './assets/leia.jpg',

  },
  {
    name: "r2d2",
    image: './assets/r2d2.jpg',

  },
]

// Duplicate array to create a match for each card
let gameGrid = cardArr.concat(cardArr)

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random())
