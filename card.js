// array of card objects
var cardArr = [
  {
    name: "ackbar",
    image:'./assets/akbar.jpg',

  },
  {
    name: "boba",
    image:'./assets/bobafett.jpg',

  },
  {
    name: "c3po",
    image:'./assets/c3p.jpg',

  },
  {
    name: "chewie",
    image:'./assets/chewy.jpg',

  },
  {
    name: "darth",
    image:'./assets/anakin.jpg',

  },
  {
    name: "greedo",
    image:'./assets/shot-too-late.jpg',

  },
  {
    name: "han",
    image:'./assets/shot-first.jpg',

  },
  {
    name: "leia",
    image:'./assets/princess.jpg',

  },
  {
    name: "r2d2",
    image:'./assets/droid.jpg',

  },
  ]

// Duplicate array to create a match for each card
let gameGrid = cardArr.concat(cardArr)

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random())
