$(function()
{
  //li要素の最後にdiv要素を追加する
  $('li').appeng('<div>');

  //div要素内に画像のキャプションを追加
  $('div').each(function()
  {
    //画像のキャプションを取得
    $(this).html('<p>' + $(this).parent().children('img').attr('alt') + '</p>');
  });

  //liがマウスホバーされたとき
  $('li').hover(function()
  {
    //キャプション部分の表示:フェードイン
    $(this).children('div').stop().fadeIn(300);

    //キャプションのテクスト位置:10pxから0pxへ移動
    $(this).children('div').children('p').stop().animate({'top' : 0 }, 300);
  },
  //マウスアウトした特
  function()
  {
    //キャプション部分の非表示:フェードアウト
    $(this).children('div').stop().fadeOut(300);

    //キャプションのテクスト位置:0pxから10pxへ移動
    $(this).children('div').children('p').stop().animate({'top' : '10px'}, 300);

  });
});
