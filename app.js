$(document).ready(function() {
// all code goes in here
// $('.box').on('click', function() {
//   $(this).addClass('white');
// })

          $('.box').on('click', function() {
            $(this).addClass(color);
          })
          // $('.box').hover(function() {
          //   $(this).addClass(color);
          // }, function () { $(this).addClass(color)})

    var isDown = false;   // Tracks status of mouse button
    $(document).mousedown(function() {
      isDown = true;      // When mouse goes down, set isDown to true
    })



    .mouseup(function() {
      isDown = false;    // When mouse goes up, set isDown to false
    });

var isBig = false;

    $(".box").mouseover(function(){
      if(isDown) {        // Only change css if mouse is down
         $(this).addClass(color);
      }
    });
    var size = 'big';
    function isbigchanger () {
      if(isBig){
        return false;
      }else{
        return true;
      }
    }

$('#brush').on('click', function() {
   isBig = isbigchanger();
   if(isBig) {
      $("div > div").addClass('big');
   } else {
     $("div > div").removeClass('big');
   }
})




$('.box').on('dblclick', function() {
  $(this).removeClass('white');
})
$('#reset').on('click', function() {
  $('.box').removeClass('white')
})
$('#red').on('click', function() {
  color = 'red';
})

$('#blue').on('click', function() {
  color = 'blue';
})

$('#green').on('click', function() {
  color = 'green';
})

$('#yellow').on('click', function() {
  color = 'yellow';
})

$('#white').on('click', function() {
  color = 'white';
})






$('.box').on('click', function() {
  $(this).addClass(color);
})

$('.box').on('dblclick', function() {
  $(this).removeClass(color);
})

$('#reset').on('click', function() {
  $('.box').removeClass(color)
})
var colors = 'white green red blue yellow'

$('.box').on('dblclick', function() {
  $(this).removeClass(colors);
})

$('#reset').on('click', function() {
  $('.box').removeClass(colors)
    $('.box').removeClass('big')
    isbig = false;

})


})
