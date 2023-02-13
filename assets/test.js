console.log('Hello shopify');


let b = document.getElementById('triggerButton');
b.addEventListener('click', function(e){
  // IDによるノードの取得
  let header_title = document.getElementById('header_title');
  // テキストの置換
  header_title.textContent = 'タイトルが変更されました';
}, false);