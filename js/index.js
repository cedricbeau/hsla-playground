let hslDef = function (value1, value2, value3, value4, range1, range2, range3, range4, result, txt) {

  value1.innerHTML = range1;
  value2.innerHTML = range2 + "%";
  value3.innerHTML = range3 + "%";
  value4.innerHTML = range4;

  result.style.background = "hsla(" + range1 + ", " + range2 + "%, " + range3 + "%, " + range4 + ")";
  txt.innerHTML = "hsla(" + range1 + ", " + range2 + "%, " + range3 + "%, " + range4 +")";
}

let hslDefFunc = function () {
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let txt = document.querySelector('.resultat')
  hslDef(values[0], values[1], values[2], values[3], ranges[0].value, ranges[1].value, ranges[2].value, ranges[3].value, result, txt)
}
hslDefFunc()

function showValue(value) {
  hslDefFunc()
}

// Reset
// ---------------------------------------------------

let hslReset = function(range1, range2, range3, range4, value1, value2, value3, value4, result, txt) {
  range1.value = '210'
  range2.value = '100'
  range3.value = '50'
  range4.value = '1'
  value1.innerHTML = '210'
  value2.innerHTML = '100'
  value3.innerHTML = '50'
  value4.innerHTML = '1'
  result.style.background = "hsla(210, 100%, 50%, 1)"
  txt.innerHTML = "hsla(210, 100%, 50%, 1)"
}

let hslResetFunc = function() {
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let txt = document.querySelector('.resultat')
  hslReset(ranges[0],ranges[1],ranges[2],ranges[3],values[0],values[1],values[2],values[3],result,txt)
}

function reset() {
  hslResetFunc()
}