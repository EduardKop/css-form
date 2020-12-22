let inpt = document.querySelector('.input');
let btn = document.getElementById('mainButton');
let mesengerForm = document.querySelector('.main');
let messegesDiv = document.querySelector('.myMsg');
let messegesDivElement = messegesDiv.getElementsByTagName('p');


btn.style.display = "none";
inpt.style.width = 460 + "px";
let i = 0;

function send() {
  var elem = document.createElement("p");
  elem.innerHTML = inpt.value;
  messegesDiv.append(elem);
  inpt.value = '';
  if (messegesDivElement.length > 4) {
    messegesDivElement[i].style.display = "none";
    i++;
  }
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