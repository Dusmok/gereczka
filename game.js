var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;


$("#dodatek").on('click', function() {
  nextSequence();
  $('#dodatek').addClass('hidden')

  $('.btn').on('click', function() {

    var userClickedColor = this.id
    userClickedPattern.push(userClickedColor);
    playSound(userClickedColor)
    $(this).addClass('pressed');
    setTimeout(function() {
      $('.btn').removeClass('pressed');
    }, 100)

    checkAnswer(userClickedPattern.length - 1);
  });



})


function nextSequence() {



  $('#dodatek').off('click')
  userClickedPattern = [];
  $('body').css('background', '#011F3F')
  var randomNumber = (Math.floor(Math.random() * 4));
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor)

  $("." + randomChosenColor).fadeToggle(100).fadeToggle(100)

  level++
  $('h1').text("Level " + level).css('color', '#FEF2BF').css('font-size','1.5rem')
}






function playSound(name) {

  var colorAudio = new Audio('sounds/' + name + '.mp3');
  colorAudio.play();

}


function animatePress(currentColor) {

}

var start = false;

// if (start === false){
//
// $(document).on('keydown', (function () {
//   nextSequence();
//  start = true;
// $(document).off('keydown')
// }))
// }




function checkAnswer(currentLevel) {



  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('good')


    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence()
      }, 1000)
    }


  } else {
    $('.btn').off('click')
    console.log('bad')
    playSound('wrong')
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    start = true;
    $('#dodatek').removeClass('hidden')
    $('#dodatek').on('click', function() {
      nextSequence()
$('#dodatek').addClass('hidden')
      $('.btn').on('click', function() {
        var userClickedColor = this.id
        userClickedPattern.push(userClickedColor);
        playSound(userClickedColor)
        $(this).addClass('pressed');
        setTimeout(function() {
          $('.btn').removeClass('pressed');
        }, 100)

        checkAnswer(userClickedPattern.length - 1);
      });
    })
    $('h1').text('PRZEGRAŁEŚ!').css('color', 'white').css('font-size','1.5rem')
    $('body').css('background', 'red')
    // $('body').on('keydown', (function () {
    //
    //   nextSequence();
    //
    // $('body').off('keydown')
    // $('#dodatek').addClass('hidden')
    //
    // $('.btn').on('click',function klikando() {
    //   var userClickedColor = this.id
    // userClickedPattern.push(userClickedColor) ;
    //  playSound(userClickedColor)
    //  $(this).addClass('pressed');
    //  setTimeout(function(){$('.btn').removeClass('pressed');}, 100)
    //
    // checkAnswer(userClickedPattern.length-1);
    //
    // });
    //
    //
    // }))

  }

};
