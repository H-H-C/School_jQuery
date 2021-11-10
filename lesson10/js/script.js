$(function()
{
  $('window').scroll(function ()
  {
    $('window').scrollTop() + 100;

    $('nav').stop().animate({'top':$(window).scrollTop() + 100}, 500);
  });
});
