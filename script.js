const clock=()=>{
  var t = new Date();
  var h= t.getHours();
  var m= t.getMinutes();
  var s= t.getSeconds();
  document.getElementById("hours").innerHTML=h;
  document.getElementById("min").innerHTML=m;
  document.getElementById("sec").innerHTML=s;
  
}

setInterval(clock,1000);