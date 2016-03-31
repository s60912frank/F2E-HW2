$(document).ready(
  function(){
    $('.imageContainer').hover(
      function(){
        $(this).children('div').fadeIn(200);
      },

      function(){
        $(this).children('div').fadeOut(100);
      }
    );
  }
);
