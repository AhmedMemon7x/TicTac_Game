let value = "X";
let value1 = document.getElementById("id1");
let value2 = document.getElementById("id2");
let value3 = document.getElementById("id3");
let value4 = document.getElementById("id4");
let value5 = document.getElementById("id5");
let value6 = document.getElementById("id6");
let value7 = document.getElementById("id7");
let value8 = document.getElementById("id8");
let value9 = document.getElementById("id9");
function changeValue(a) {
  if (a.innerHTML == "") {
    a.innerHTML = value;
    if (value == "X") {
      value = "0";
    } else {
      value = "X";
    }
    if (
      value1.innerHTML == value2.innerHTML &&
      value1.innerHTML == value3.innerHTML &&
      value1.innerHTML !== ""
    ) {
      alert(value1.innerHTML+" is the Winner");
    } else if (
      value4.innerHTML == value5.innerHTML &&
      value4.innerHTML == value6.innerHTML &&
      value4.innerHTML !== ""
    ) {
      alert(value4.innerHTML+" is the Winner");
    } else if (
      value7.innerHTML == value8.innerHTML &&
      value7.innerHTML == value9.innerHTML &&
      value7.innerHTML !== ""
    ) {
      alert(value7.innerHTML+" is the Winner");
    } else if (
      value1.innerHTML == value4.innerHTML &&
      value1.innerHTML == value7.innerHTML &&
      value1.innerHTML !== ""
    ) {
      alert(value1.innerHTML+" is the Winner");
    } else if (
      value2.innerHTML == value5.innerHTML &&
      value2.innerHTML == value8.innerHTML &&
      value2.innerHTML !== ""
    ) {
      alert(value2.innerHTML+" is the Winner");
    } else if (
      value3.innerHTML == value6.innerHTML &&
      value3.innerHTML == value9.innerHTML &&
      value3.innerHTML !== ""
    ) {
      alert(value3.innerHTML+" is the Winner");
    } else if (
      value1.innerHTML == value5.innerHTML &&
      value1.innerHTML == value9.innerHTML &&
      value1.innerHTML !== ""
    ) {
      alert(value1.innerHTML+" is the Winner");
    } else if (
      value3.innerHTML == value5.innerHTML &&
      value3.innerHTML == value7.innerHTML &&
      value3.innerHTML !== ""
    ) {
      alert(value3.innerHTML+" is the Winner");
    }
    else if(value1.innerHTML!=+""&&value2.innerHTML!==""&&value3.innerHTML!==""&&value4.innerHTML!==""&&value5.innerHTML!==""&&value6.innerHTML!==""&&value7.innerHTML!==""&&value8.innerHTML!==""&&value9.innerHTML!==""){
        alert("Match is Draw")
      }
    
  }
}
function darkMode()
{
  let color=document.getElementById("b1")
  color.style.backgroundColor="#F39F5A";
  color.style.color="black";
  let color1=document.getElementById("b2")
  color1.style.backgroundColor="#F39F5A";
  color1.style.color="black";
  let color2=document.getElementById("b3")
  color2.style.backgroundColor="#B51A2B";
  let color3=document.getElementsByClassName("grid")
  for(let i=0;i<color3.length;i++){
    color3[i].style.borderColor="#06142E";
    color3[i].style.backgroundColor="#F1916D"
  }
  
  let pic1=document.getElementById("pic")
  pic1.src="icons8-bulb-64.png"
}
function lightMode(){
  let color=document.getElementById("b1")
  color.style.backgroundColor="black";
  color.style.color="white";
  let color1=document.getElementById("b2")
  color1.style.backgroundColor="black";
  color1.style.color="white";
  let color2=document.getElementById("b3")
  color2.style.backgroundColor="white";
  let color3=document.getElementsByClassName("grid")
  for(let i=0;i<color3.length;i++){
    color3[i].style.borderColor="#F1916D";
    color3[i].style.backgroundColor="#2B124C"
  }
  let pic1=document.getElementById("pic")
  pic1.src="icons8-bulb-64 (1).png"
}