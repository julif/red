function fadediv(p1, p2){
  p1.style.zIndex = "3"; // 1- div1 adelante
  p2.style.zIndex = "1";// 2- div2  atras
  p2.style.display="flex";// 3- hacer que aparezca el div de atras
  p2.classList.remove("hidden");// 4- asegurarse que no esta invisible
  p1.classList.add("hidden");// 5- fade effect
   
  var myVar = setTimeout(ocultardiv, 500);// 6- after fade
  function ocultardiv() { p1.style.display="none";}
}

function go_to_section(a,b,c){
  if( c =="flex"){
    document.getElementById(a).style.display="none";
    document.getElementById(b).style.display="flex";
  }
  else{ 
    document.getElementById(a).style.display="none";
    document.getElementById(b).style.display="inherit";
  }
}