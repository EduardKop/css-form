let inpt = document.querySelector('.input');
let btn = document.getElementById('mainButton');
let mesengerForm = document.querySelector('.main');
let messegesDiv = document.querySelector('.myMsg');

btn.style.display = "none";
inpt.style.width = 460 + "px";

function send() {
  var elem = document.createElement("p");
  var br = document.createElement("br");
  elem.innerHTML = inpt.value;
  messegesDiv.append(elem);
  messegesDiv.append(br);
  // btn.style.display = "none";
  // inpt.style.width = 460 + "px";
  inpt.value = '';
  console.log(inpt.value)
  
}

inpt.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    btn.addEventListener("click", send());
  }
});

// function showCount() {
//   if (inpt.value != '') {
//     // btn.style.display = "block";
//     // inpt.style.width = 400 + "px";

//     // } else if (inpt.value == '') {
//     //   inpt.style.width = 400 + "px";
//     // setTimeout(() => { btn.style.display = "block";} , 500);
//   }
// }

// inpt.onkeyup = inpt.oninput = showCount;

// inpt.onpropertychange = function () {
//   if (event.propertyName == "value") showCount();
// }
// inpt.oncut = function () {
//   setTimeout(showCount, 0); // на момент oncut значение ещё старое
// };
// // inpt.addEventListener('focus', function () {


// // });