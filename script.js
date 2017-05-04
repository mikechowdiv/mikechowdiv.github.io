// This js file is designed to be included in all pages

$(function() {
  auto_active_menu();
  avatar_hover_effect();
});

function auto_active_menu() {
  var url = window.location.href;
  // Work for relative and absolute hrefs
  $('.menu a').filter(function() {
      return this.href == url;
      }).addClass('active');
}

function avatar_hover_effect() {
  $(".avatar").hover(function(e)
  {
    var _this = e.target;
    var color = getAvatarColor();
    $(_this).css("background-color", color);
  });
}

function getAvatarColor()
{
  return "#bdc3c7";
}


var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').parent().removeClass('active');
      sections.removeClass('active');
      
      $(this).parent().addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 750);
  
  return false;
});


$(document).ready(function() {
    $('#bt1').click(function() {
        $('#fr1').attr('action',
                       'mailto:mikechowdiv@gmail.com?subject=' +
                       $('#usr').val() + '&body=' + $('#msg').val());
        $('#fr1').submit();
    });
});