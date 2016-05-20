$(document).ready(
  function(){
    $('.imageContainer').hover(
      function(){
        $(this).children('div').fadeIn(100);
      },
      function(){
        $(this).children('div').fadeOut(50);
      }
    );

    $('.smallIconContainer').hover(
      function(){
        $(this).children().last().fadeIn(100);
      },
      function(){
        $(this).children().last().fadeOut(50);
      }
    );

    $('#menuIcon').click(
      function(){
        var sb = $('#sideBar');
        sb.css('top', $(this).offset().top + 30);
        sb.css('left', $(this).offset().left - 70);
        sb.fadeToggle(100);
        $('#x').fadeToggle(100);
      }
    );

    $('.imageContainer').click(
      function(){
        $(this).parent().children('.content').removeClass('hidden-xs');
        $(this).parent().children('.triangle').removeClass('hidden-xs');
        $('.content').not($(this).parent().children('.content')).addClass('hidden-xs');
        $('.triangle').not($(this).parent().children('.triangle')).addClass('hidden-xs');
      }
    );
  }
);
