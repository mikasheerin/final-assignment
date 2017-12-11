$(document).ready(function() {

  ///audio stuff////

      document.addEventListener('play', function(e){
          var audios = document.getElementsByTagName('audio');
          for(var i = 0, len = audios.length; i < len;i++){
              if(audios[i] != e.target){
                  audios[i].pause();
              }
          }
      }, true);


///song & sample switches///

  function hideAll() {
    $('.question2').hide();
    $('.question3').hide();
    $('.question4').hide();
    $('.question5').hide();
    $('.question6').hide();
    $('.question7').hide();
    $('.question8').hide();
    $('.question9').hide();
    $('.question10').hide();
    $('#diana_ross').hide();
    $('#maria').hide();
    $('#dido').hide();
    $('#that_lady').hide();
    $('#ive_got_a_woman').hide();
    $('#queen').hide();
    $('#the_clash').hide();
    $('#garage_band').hide();
    $('#chuck_berry').hide();
    $('#timmy').hide();
  }

  hideAll();

///When the submit button is clicked, the song div hides and the sample div shows///

///Question 1///
$('#submit1').click(function() {
  $('#biggie').hide();
  $('#diana_ross').show();
  chart1();
  $('.wrong1').addClass('text-danger');
  $('.right1').addClass('text-success');
});

$('#reset1').click(function() {
  $('#biggie').show();
  $('#diana_ross').hide();
  $('.wrong1').removeClass('text-danger');
  $('.right1').removeClass('text-success');
});

$('#next1').click(function() {
  $('.question1').hide();
  $('.question2').show();
});

///Question 2///
$('#submit2').click(function() {
  $('#riri').hide();
  $('#maria').show();
  chart2();
  $('.wrong2').addClass('text-danger');
  $('.right2').addClass('text-success');
});

$('#reset2').click(function() {
  $('#riri').show();
  $('#maria').hide();
  $('.wrong2').removeClass('text-danger');
  $('.right2').removeClass('text-success');
});

$('#next2').click(function() {
  $('.question2').hide();
  $('.question3').show();
});

$('#back2').click(function() {
  $('.question1').show();
  $('.question2').hide();
});

///Question 3///
$('#submit3').click(function() {
  $('#stan').hide();
  $('#dido').show();
  chart3();
  $('.wrong3').addClass('text-danger');
  $('.right3').addClass('text-success');
});

$('#reset3').click(function() {
  $('#stan').show();
  $('#dido').hide();
  $('.wrong3').removeClass('text-danger');
  $('.right3').removeClass('text-success');
});

$('#next3').click(function() {
  $('.question3').hide();
  $('.question4').show();
});

$('#back3').click(function() {
  $('.question2').show();
  $('.question3').hide();
});

///Question 4///
$('#submit4').click(function() {
  $('#i').hide();
  $('#that_lady').show();
  chart4();
  $('.wrong4').addClass('text-danger');
  $('.right4').addClass('text-success');
});

$('#reset4').click(function() {
  $('#i').show();
  $('#that_lady').hide();
  $('.wrong4').removeClass('text-danger');
  $('.right4').removeClass('text-success');
});

$('#next4').click(function() {
  $('.question4').hide();
  $('.question5').show();
});

$('#back4').click(function() {
  $('.question3').show();
  $('.question4').hide();
});

///Question 5///
$('#submit5').click(function() {
  $('#kanye').hide();
  $('#ive_got_a_woman').show();
  chart5();
  $('.wrong5').addClass('text-danger');
  $('.right5').addClass('text-success');
});

$('#reset5').click(function() {
  $('#kanye').show();
  $('#ive_got_a_woman').hide();
  $('.wrong5').removeClass('text-danger');
  $('.right5').removeClass('text-success');
});

$('#next5').click(function() {
  $('.question5').hide();
  $('.question6').show();
});

$('#back5').click(function() {
  $('.question4').show();
  $('.question5').hide();
});

///Question 6///
$('#submit6').click(function() {
  $('#you_and_i').hide();
  $('#queen').show();
  chart6();
  $('.wrong6').addClass('text-danger');
  $('.right6').addClass('text-success');
});

$('#reset6').click(function() {
  $('#you_and_i').show();
  $('#queen').hide();
  $('.wrong6').removeClass('text-danger');
  $('.right6').removeClass('text-success');
});

$('#next6').click(function() {
  $('.question6').hide();
  $('.question7').show();
});

$('#back6').click(function() {
  $('.question5').show();
  $('.question6').hide();
});

///Question 7///
$('#submit7').click(function() {
  $('#mia').hide();
  $('#the_clash').show();
  chart7();
  $('.wrong7').addClass('text-danger');
  $('.right7').addClass('text-success');
});

$('#reset7').click(function() {
  $('#mia').show();
  $('#the_clash').hide();
  $('.wrong7').removeClass('text-danger');
  $('.right7').removeClass('text-success');
});

$('#next7').click(function() {
  $('.question7').hide();
  $('.question8').show();
});

$('#back7').click(function() {
  $('.question6').show();
  $('.question7').hide();
});

///Question 8///
$('#submit8').click(function() {
  $('#umbrella').hide();
  $('#garage_band').show();
  chart8();
  $('.wrong8').addClass('text-danger');
  $('.right8').addClass('text-success');
});

$('#reset8').click(function() {
  $('#umbrella').show();
  $('#garage_band').hide();
  $('.wrong8').removeClass('text-danger');
  $('.right8').removeClass('text-success');
});

$('#next8').click(function() {
  $('.question8').hide();
  $('.question9').show();
});

$('#back8').click(function() {
  $('.question7').show();
  $('.question8').hide();
});

///Question 9///
$('#submit9').click(function() {
  $('#beatles').hide();
  $('#chuck_berry').show();
  chart9();
  $('.wrong9').addClass('text-danger');
  $('.right9').addClass('text-success');
});

$('#reset9').click(function() {
  $('#beatles').show();
  $('#chuck_berry').hide();
  $('.wrong9').removeClass('text-danger');
  $('.right9').removeClass('text-success');
});

$('#next9').click(function() {
  $('.question9').hide();
  $('.question10').show();
});

$('#back9').click(function() {
  $('.question8').show();
  $('.question9').hide();
});

///Question 10///
$('#submit10').click(function() {
  $('#drake').hide();
  $('#timmy').show();
  chart10();
  $('.wrong10').addClass('text-danger');
  $('.right10').addClass('text-success');
});

$('#reset10').click(function() {
  $('#drake').show();
  $('#timmy').hide();
  $('.wrong10').removeClass('text-danger');
  $('.right10').removeClass('text-success');
});

$('#back10').click(function() {
  $('.question9').show();
  $('.question10').hide();
});



});
