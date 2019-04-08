// jquery ready on page load
$(document).ready(function() {





  //global variables
  var score = 0
  var turns = 15
  var blaster = new Audio('./assets/blaster.mp3');
  var cantina = new Audio('./assets/cantina.mp3');
  var fates = new Audio('./assets/fates.mp3');
  var r2d2 = new Audio('./assets/r2d2.mp3');
  var theme = new Audio('./assets/starwars-memory-theme.mp3');






  // game initialization
$('.title').on('click', '#start', function () {

    let firstGuess = ''
    let secondGuess = ''
    let count = 0
    let delay = 1200
    let previousTarget = null
      // r2d2 sound on game start
      r2d2.play();
      // hide gametitle & startbutton, show gamegrid after startgame button press
      $(".scoreboard").show()
      $("#start").remove()
      $("#game-title").remove()
      // Grab the div with an id of root
      const game = document.getElementById('game')
      // Create a section with a class of grid
      const grid = document.createElement('section')
      grid.setAttribute('class', 'grid')
      //  Append the grid section to the game div
      game.appendChild(grid)

      // For each item in the cards array...
      gameGrid.forEach(item => {
        // Create card element with the name dataset
        const card = document.createElement('div')
        card.classList.add('card')
        card.dataset.name = item.name

        // Create front of card
        const front = document.createElement('div')
        front.classList.add('front')

        // Create back of card, which contains
        const back = document.createElement('div')
        back.classList.add('back')
        back.style.backgroundImage = `url(${item.image})`

        // Append card to grid, and front and back to each card
        grid.appendChild(card)
        card.appendChild(front)
        card.appendChild(back)
      })

      // Add match CSS
      const match = () => {
        const selected = document.querySelectorAll('.selected');
        selected.forEach(card => {
          card.classList.add('match')
        })
      }

      // reset guesses
      const resetGuesses = () => {
          firstGuess = ''
          secondGuess = ''
          count = 0;
          previousTarget = null

          var selected = document.querySelectorAll('.selected')
          selected.forEach(card => {
            card.classList.remove('selected')
          });
      }


      // Add event listener to grid
      grid.addEventListener('click', function(event) {
          blaster.play()
          // The event target is our clicked item
          const clicked = event.target

          if (
                clicked.nodeName === 'SECTION' ||
                clicked === previousTarget ||
                clicked.parentNode.classList.contains('selected') ||
                clicked.parentNode.classList.contains('match')
              )   {
                    return;
                  }

          if (count < 2) {
              count++;

              if (count === 1) {
                // Assign first guess
                firstGuess = clicked.parentNode.dataset.name
                console.log(firstGuess)
                clicked.parentNode.classList.add('selected');
              } else {
                // Assign second guess
                secondGuess = clicked.parentNode.dataset.name
                console.log(secondGuess)
                clicked.parentNode.classList.add('selected')
              }
              // If both guesses are not empty...
              if (firstGuess !== '' && secondGuess !== '') {
                // and the first guess matches the second match...
                if (firstGuess === secondGuess) {
                // run the match function
                score++
                console.log(score)
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
              } else {
                turns--
                console.log(turns)
                setTimeout(resetGuesses, delay);
              }
                // Set previous target to clicked
                previousTarget = clicked;
              }
                // scoreboard
                document.querySelector('#score').innerHTML = `Score: ${score}`
                document.querySelector('#turns').innerHTML = `${turns} Guess Left`
            }
                //win/loss conditions
                if (score == 9) {
                  cantina.play();
                  document.querySelector('.game-message').innerHTML = `The force is strong with this one!`

                }


                if (turns == 0) {
                  fates.play();
                  document.querySelector('.game-message').innerHTML = `Aren’t you a little short for a stormtrooper?`

                }

          })

        })
})
