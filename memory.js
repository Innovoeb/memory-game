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

  // scoreboard
  document.querySelector('#score').innerHTML = `Score: ${score}`
  document.querySelector('#turns').innerHTML = `${turns} Turns Left`

  // game initialization
  $('.title').on('click', '#start', function () {
//    $('.card').attr('disabled', false)
    r2d2.play();
    shuffArr(cardArr)
    placeOBJ()
    var cardA = ""
    var cardB = ""
    var pickA = ""
    var pickB = ""
    var score = 0
    var turns = 10
    $(".play-field").show()
    $("#start").remove()
    $("#game-title").remove()
  })



  // game logic
  $('.play-field').on('click', '.card', function () {
      blaster.play();

        // card flips but shows same image when clicked on a card
  //    $(this).html(`${cardArr[0].image}`)











    if (cardA == null) {
      cardA = this.innerHTML
      pickA = this.id



      console.log("cardA:", cardA)
      console.log("pickA:", pickA)
    } else if (cardB == null) {
      cardB = this.innerHTML
      pickB = this.id


      console.log("cardB:", cardB)
      console.log("pickB:", pickB)
      if (cardA == cardB) {
        score += 1
        cardA = null
        cardB = null
        shuffArr(praise)
        document.querySelector('.game-message').innerHTML = `${praise[0]}`
        document.querySelector('#score').innerHTML = `Score: ${score}`
        document.querySelector('#turns').innerHTML = `${turns} Turns Left`

        console.log("score:", score)
      } else {
        turns--
        $(pickA).removeClass('show')
        $(pickB).removeClass('show')
        cardA = null
        cardB = null
        shuffArr(encourage)
        document.querySelector('.game-message').innerHTML = `${encourage[0]}`
        document.querySelector('#score').innerHTML = `Score: ${score}`
        document.querySelector('#turns').innerHTML = `${turns} Turns Left`

        console.log("turns:", turns)
      }
    }

    // win/loss conditions
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

  // shuffle array function
  function shuffArr(array) {
    var ctr = array.length, temp, index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr)
      ctr--
      temp = array[ctr]
      array[ctr] = array[index]
      array[index] = temp
    }
    return array
  }

  // display cards and values into playfield div
  function placeOBJ() {
    document.querySelector('#r1c1').innerHTML = `${cardArr[0].image}`
    document.querySelector('#r1c2').innerHTML = `${cardArr[1].image}`
    document.querySelector('#r1c3').innerHTML = `${cardArr[2].image}`
    document.querySelector('#r1c4').innerHTML = `${cardArr[3].image}`
    document.querySelector('#r1c5').innerHTML = `${cardArr[4].image}`
    document.querySelector('#r1c6').innerHTML = `${cardArr[5].image}`
    document.querySelector('#r2c1').innerHTML = `${cardArr[6].image}`
    document.querySelector('#r2c2').innerHTML = `${cardArr[7].image}`
    document.querySelector('#r2c3').innerHTML = `${cardArr[8].image}`
    document.querySelector('#r2c4').innerHTML = `${cardArr[9].image}`
    document.querySelector('#r2c5').innerHTML = `${cardArr[10].image}`
    document.querySelector('#r2c6').innerHTML = `${cardArr[11].image}`
    document.querySelector('#r3c1').innerHTML = `${cardArr[12].image}`
    document.querySelector('#r3c2').innerHTML = `${cardArr[13].image}`
    document.querySelector('#r3c3').innerHTML = `${cardArr[14].image}`
    document.querySelector('#r3c4').innerHTML = `${cardArr[15].image}`
    document.querySelector('#r3c5').innerHTML = `${cardArr[16].image}`
    document.querySelector('#r3c6').innerHTML = `${cardArr[17].image}`
  }



})
