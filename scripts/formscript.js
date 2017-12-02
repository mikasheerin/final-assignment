$(document).ready(function() {

  function hideAll() {
    $('#diana_ross').hide();

    //other questions//
    $('.answer_audio').hide();
    $('#container2').hide();
    $('#container3').hide();
    $('#container4').hide();
    $('#container5').hide();
    $('#container6').hide();
    $('#container7').hide();
    $('#container8').hide();
    $('#container9').hide();
    $('#container10').hide();
  }

  hideAll();


  $('button').click(function() {
    hideAll();

    switch ($(this).attr("id")) {
      case "form-group":
        $('#diana_ross').show();
        break;
    }

    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });

  });


});
