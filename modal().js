function showModal(){
  let modal=document.querySelector("#modal");
  modal.innerHTML="文字";
}

function changeRed(){
  let modal2=document.querySelector("#modal2");
  modal.style.backgroundColor="Red";
}

function changeYellow(){
  let modal1=document.querySelector("#modal1");
  modal.style.backgroundColor="Yellow";
}

function appendCircle(){
  let modal=document.querySelector("#modal2");
  modal.innerHTML=modal.innerHTML+"〇";
}

function appendCross(){
  let modal=document.querySelector("#modal2");
  modal.innerHTML=modal.innerHTML+"×";
}

function  plusOne(){
  let modal=document.querySelector("#modal3");
  modal.innerHTML=Number(modal.innerHTML)+1;
}

function  plusFive(){
  let modal=document.querySelector("#modal3");
  modal.innerHTML=Number(modal.innerHTML)+5;
}

function  plusTen(){
  let modal=document.querySelector("#modal3");
  modal.innerHTML=Number(modal.innerHTML)+10;
}

function checkNumber(){
  if(Number(document.querySelector("#num").value)>10) {
    window.alert("true");
  }else{
    window.alert("false");
  }
}

function checkUserInput(){
  if(String(document.querySelector("#user_input").)="隣の客はよく柿食う客だ"){
    window.alert("〇");
  }else{
    window.alert("×");
  }
}