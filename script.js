const getcolor=()=>{
    const randomNumber=Math.floor(Math.random()*16777215);
    const randamCode="#"+randomNumber.toString(16);
  document.body.style.backgroundColor=randamCode;
   document.getElementById("text").innerText=count++;
   navigator.clipboard.writeText(randamCode);
}

document.getElementById("btn").addEventListener(
    "click", getcolor
)
var count=0;

getcolor();