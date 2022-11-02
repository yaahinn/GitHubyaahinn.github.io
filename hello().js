function hello(){
  console.log("こんにちはこんにちは");
}

function helloSomeone(引数1){
  console.log('こんにちは${引数1}さん')
}

function helloCircleArea(radius){
  return radius*radius*Math.PI;
}

function helloRectangleArea(width,height){
  return width*height;
}

function showModal(){
  console.log("modal");
  let modal=document.querySelector("#modal");
  modal.innerHTML="ボタンが押されました";
}

