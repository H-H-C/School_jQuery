$(function()
{
  $('#navi').children('li').hover(function()
  {
    //マウスにカーソルが乗ったとき処理
    //ナビゲーションの表示を切り替える
    $(this).children('ul').stop().slideToggle(100);
  });
});