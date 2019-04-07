// jquery ready on page load
$(document).ready(function() {



  //global variables
  var cardA
  var cardB
  var pickA
  var pickB
  var score = 0
  var turns = 10
  var blaster = new Audio('./assets/blaster.mp3');
  var cantina = new Audio('./assets/cantina.mp3');
  var fates = new Audio('./assets/fates.mp3');
  var r2d2 = new Audio('./assets/r2d2.mp3');







  // game initialization
  $('.title').on('click', '#start', function () {
      // r2d2 sound on game start
      r2d2.play();
      // git rid of gametitle, startbutton, and show gamegrid after startgame button press
  //    $(".play-field").show()
      $("#start").remove()
      $("#game-title").remove()
    // Grab the div with an id of root
    const game = document.getElementById('game')

  // Create a section with a class of grid
    const grid = document.createElement('section')
    grid.setAttribute('class', 'grid')

  // Append the grid section to the game div
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

      let firstGuess = ''
      let secondGuess = ''
      let count = 0
      let previousTarget = null
      let delay = 1200

      // Add match CSS
      const match = () => {
        var selected = document.querySelectorAll('.selected')
        selected.forEach(card => {
          card.classList.add('match')
        })
      }

      const resetGuesses = () => {
          firstGuess = ''
          secondGuess = ''
          count = 0

          var selected = document.querySelectorAll('.selected')
          selected.forEach(card => {
            card.classList.remove('selected')
          })
      }

//    $('.card').prop('disabled', false)
    // $('.card').addClass('hide')

//    shuffArr(cardArr)
//    placeOBJ()
    // var cardA = ""
    // var cardB = ""
    // var pickA = ""
    // var pickB = ""
    // var score = 0
    // var turns = 10


    // Add event listener to grid
        grid.addEventListener('click', function(event) {
      // The event target is our clicked item
            let clicked = event.target

            if (
                clicked.nodeName === 'SECTION' ||
                clicked === previousTarget ||
                clicked.parentNode.classList.contains('selected') ||
                clicked.parentNode.classList.contains('match')
                )   {
                    return;
                }

            if (count < 2) {
              count++
            }
            if (count === 1) {
                // Assign first guess
                firstGuess = clicked.parentNode.dataset.name
                console.log(firstGuess)
                clicked.parentNode.classList.add('selected')
            } else {
                // Assign second guess
                secondGuess = clicked.parentNode.dataset.name
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
                // scoreboard
                document.querySelector('#score').innerHTML = `Score: ${score}`
                document.querySelector('#turns').innerHTML = `${turns} Turns Left`
            }
            //win/loss conditions
                if (score == 9) {
                  cantina.play();
                  document.querySelector('.game-message').innerHTML = `The force is strong with this one!`
                  $('.card').attr('disabled', true)
                }


                if (turns == 0) {
                  fates.play();
                  document.querySelector('.game-message').innerHTML = `Aren’t you a little short for a stormtrooper?`
                  $('.card').attr('disabled', true)
                }

          })






    })



  // game logic
  // $('.play-field').on('click', '.card', function () {
  //     blaster.play();
  //
  //       // card flips but shows same image when clicked on a card
  // //    $(this).html(`${cardArr[0].image}`)
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //   // $(this).removeClass('hide')
  //   blaster.play();
  //   if (cardA == null) {
  //     cardA = this.innerHTML
  //     pickA = this.id
  //     // $(this).prop('disabled', true)
  //     // blaster.play();
  //
  //
  //     console.log("cardA:", cardA)
  //     console.log("pickA:", pickA)
  //   } else if (cardB == null) {
  //     cardB = this.innerHTML
  //     pickB = this.id
  //
  //     // $(this).prop('disabled', true)
  //     // blaster.play();
  //
  //     console.log("cardB:", cardB)
  //     console.log("pickB:", pickB)
  //     if (cardA == cardB) {
  //       score += 1
  //       cardA = null
  //       cardB = null
  //       shuffArr(praise)
  //       document.querySelector('.game-message').innerHTML = `${praise[0]}`
  //       document.querySelector('#score').innerHTML = `Score: ${score}`
  //       document.querySelector('#turns').innerHTML = `${turns} Turns Left`
  //
  //       console.log("score:", score)
  //
  //       if (score === 9) {
  //         cantina.play();
  //         document.querySelector('.game-message').innerHTML = `The force is strong with this one!`
  //         $('.card').prop('disabled', true)
  //         $("#start").show()
  //       }
  //     } else {
  //       turns--
  //       // $(pickA).removeClass('show')
  //       // $(pickB).removeClass('show')
  //       // $(pickA).prop('disabled', false)
  //       // $(pickB).prop('disabled', false)
  //       cardA = null
  //       cardB = null
  //       shuffArr(encourage)
  //       document.querySelector('.game-message').innerHTML = `${encourage[0]}`
  //       document.querySelector('#score').innerHTML = `Score: ${score}`
  //       document.querySelector('#turns').innerHTML = `${turns} Turns Left`
  //
  //       console.log("turns:", turns)
  //
  //       if (turns === 0) {
  //         fates.play();
  //         document.querySelector('.game-message').innerHTML = `Aren’t you a little short for a stormtrooper?`
  //         $('.card').prop('disabled', true)
  //         $("#start").show()
  //       }
  //     }
  //   }
  //
  //


  // shuffle array function
  // function shuffArr(array) {
  //   var ctr = array.length, temp, index;
  //   while (ctr > 0) {
  //     index = Math.floor(Math.random() * ctr)
  //     ctr--
  //     temp = array[ctr]
  //     array[ctr] = array[index]
  //     array[index] = temp
  //   }
  //   return array
  // }

  // display cards and values into playfield div
  // function placeOBJ() {
  //   document.querySelector('#r1c1').innerHTML = `${cardArr[0].image}`
  //   document.querySelector('#r1c2').innerHTML = `${cardArr[1].image}`
  //   document.querySelector('#r1c3').innerHTML = `${cardArr[2].image}`
  //   document.querySelector('#r1c4').innerHTML = `${cardArr[3].image}`
  //   document.querySelector('#r1c5').innerHTML = `${cardArr[4].image}`
  //   document.querySelector('#r1c6').innerHTML = `${cardArr[5].image}`
  //   document.querySelector('#r2c1').innerHTML = `${cardArr[6].image}`
  //   document.querySelector('#r2c2').innerHTML = `${cardArr[7].image}`
  //   document.querySelector('#r2c3').innerHTML = `${cardArr[8].image}`
  //   document.querySelector('#r2c4').innerHTML = `${cardArr[9].image}`
  //   document.querySelector('#r2c5').innerHTML = `${cardArr[10].image}`
  //   document.querySelector('#r2c6').innerHTML = `${cardArr[11].image}`
  //   document.querySelector('#r3c1').innerHTML = `${cardArr[12].image}`
  //   document.querySelector('#r3c2').innerHTML = `${cardArr[13].image}`
  //   document.querySelector('#r3c3').innerHTML = `${cardArr[14].image}`
  //   document.querySelector('#r3c4').innerHTML = `${cardArr[15].image}`
  //   document.querySelector('#r3c5').innerHTML = `${cardArr[16].image}`
  //   document.querySelector('#r3c6').innerHTML = `${cardArr[17].image}`
  // }



})
