// jquery ready on page load
$(document).ready(function () {
  // event handlers
  // $('.row-1').on('click', 'div', function() {
  //   console.log("yo");
  //   $(this).addClass('show')
  // })
  //
  // $('.row-2').on('click', 'div', function() {
  //   console.log("hey, what's happenin")
  // })
  //
  // $('.row-3').on('click', 'div', function() {
  //   placeOBJ()
  // })
  var cardA
  var cardB
  var pickA
  var pickB
  var score = 0
  var turns = 1

  $('.title').on('click', '#start', function () {
    $('.card').attr('disabled', false)
    shuffArr(cardArr)
    placeOBJ()
    var cardA = ""
    var cardB = ""
    var pickA = ""
    var pickB = ""
    var score = 0
    var turns = 10
  })

  $('.play-field').on('click', '.card', function () {
    if (cardA == null) {
      cardA = this.innerHTML
      pickA = this.id
      playSound("blaster")

      console.log("cardA:", cardA)
      console.log("pickA:", pickA)
    } else if (cardB == null) {
      cardB = this.innerHTML
      pickB = this.id
      playSound("blaster")

      console.log("cardB:", cardB)
      console.log("pickB:", pickB)
      if (cardA == cardB) {
        score++
        cardA = null
        cardB = null
        shuffArr(praise)
        document.querySelector('game-message').innerHTML = `${praise[0]}`

        console.log("score:", score)
      } else {
        turns--
        $(pickA).removeClass('show')
        $(pickB).removeClass('show')
        cardA = null
        cardB = null
        shuffArr(encourage)
        document.querySelector('game-message').innerHTML = `${encourage[0]}`

        console.log("turns:", turns)
      }
    }
  })

  if (score === 9) {
    playSound("cantina")
    document.querySelector('game-message').innerHTML = `The force is strong with this one!`
    $('.card').attr('disabled', true)
  }

  if (turns === 0) {
    playSound("fates")
    document.querySelector('game-message').innerHTML = `The force is strong with this one!`
    $('.card').attr('disabled', true)
  }

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
  // place object into div function
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
