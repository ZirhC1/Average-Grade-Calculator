//START//
//INPUT AND VALUE FUNCTION CODE/


document.getElementById("calc-btn").addEventListener("click", calc);
document.getElementById("clear-btn").addEventListener("click", clear);
// document.getElementById("rows").addEventListener("click", rowNew);


//functon/input
function calc() {
  //grade inputs
  let one = +document.getElementById("g1").value;
  let two = +document.getElementById("g2").value;
  let three = +document.getElementById("g3").value;
  let four = +document.getElementById("g4").value;
  let five = +document.getElementById("g5").value;
  let newGrade6 = +document.getElementById("g6").value;
  let newGrade7 = +document.getElementById("g7").value;

  //weight inputs
  let onew = +document.getElementById("w1").value;
  let twow = +document.getElementById("w2").value;
  let threew = +document.getElementById("w3").value;
  let fourw = +document.getElementById("w4").value;
  let fivew = +document.getElementById("w5").value;
  let newGrade6w = +document.getElementById("w6").value;
  let newGrade7w = +document.getElementById("w7").value;

  let total = (onew*twow*threew*fourw*fivew*newGrade6w*newGrade7w);
  

let ovrlw1 = onew
let ovrlw2 = twow
let ovrlw3 = threew
let ovrlw4 = fourw
let ovrlw5 = fivew
let ovrlw6 = newGrade6w
let ovrlw7 = newGrade7w
  
//"if" used for the calculating of each grade and weight numerically
if (ovrlw1) {total = onew}
if (ovrlw2) {total = onew+twow}
if (ovrlw3) {total = onew+twow+threew}
if (ovrlw4) {total = onew+twow+threew+fourw}
if (ovrlw5) {total = onew+twow+threew+fourw+fivew}
if (ovrlw6) {total = onew+twow+threew+fourw+fivew+newGrade6w}
if (ovrlw7) {total = onew+twow+threew+fourw+fivew+newGrade6w+newGrade7w}


  let overAll = (onew * one + twow * two + threew * three + fourw * four + fivew*five + newGrade6w * newGrade6 + newGrade7w * newGrade7)/(total);
  console.log`(your answer is ${total})`;
  //overAll is used here to calculate the overall grade
document.getElementById(
    "ovrall"
  ).innerHTML = `YOUR COURSE MARK AVERAGE IS: ${overAll}%`;
}


function clear() {
  document.getElementById("g1").value = "";
  document.getElementById("g2").value = "";
  document.getElementById("g3").value = "";
  document.getElementById("g4").value = "";
  document.getElementById("g5").value = "";
  document.getElementById("g6").value = "";
  document.getElementById("g7").value = "";

  document.getElementById("w1").value = "";
  document.getElementById("w2").value = "";
  document.getElementById("w3").value = "";
  document.getElementById("w4").value = "";
  document.getElementById("w5").value = "";
  document.getElementById("w6").value = "";
  document.getElementById("w7").value = "";

  document.getElementById("ovrall").innerHTML = "------";

}




