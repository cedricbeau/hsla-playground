// -----------------------------------------------------------------------
// GET HSL
// -----------------------------------------------------------------------

function hslDef(value1, value2, value3, range1, range2, range3, result, primary, complementary, triadic) {

  value1.innerText = range1;
  value2.innerText = range2 + "%";
  value3.innerText = range3 + "%";

  result.style.background = "hsl(" + range1 + ", " + range2 + "%, " + range3 + "%)";
  primary.innerHTML = "<div class='resultat_primary'>hsl(" + range1 + ", " + range2 + "%, " + range3 + "%)</div>";

  let H = parseInt(range1)
  let complementaryH = H + 180 - 360
  let triadicH = H + 120 - 360

  function calcComplementary() {
    if(complementaryH < 0) {
      return complementaryH + 360
    } else {
      return complementaryH
    }
  }

  function calcTriadic() {
    if(triadicH < 0) {
      return triadicH + 360
    } else {
      return triadicH
    }
  }

  complementary.style.background = "hsl(" + calcComplementary() + ", " + range2 + "%, " + range3 + "%)";
  complementary.innerHTML = "<div class='resultat_complementary'><strong>Complementary: </strong>hsla(" + calcComplementary() + ", " + range2 + "%, " + range3 + "%)</div>";

  triadic.style.background = "hsl(" + calcTriadic() + ", " + range2 + "%, " + range3 + "%)";
  triadic.innerHTML = "<div class='resultat_complementary'><strong>Triadic: </strong>hsla(" + calcTriadic() + ", " + range2 + "%, " + range3 + "%)</div>";

}

function hslDefFunc() {
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let primary = document.querySelector('.primary')
  let complementary = document.querySelector('.complementary')
  let triadic = document.querySelector('.triadic')
  hslDef(values[0], values[1], values[2], ranges[0].value, ranges[1].value, ranges[2].value, result, primary,complementary,triadic)
}

// -----------------------------------------------------------------------
// GET HSLA
// -----------------------------------------------------------------------

let hslaDef = function (value1, value2, value3, value4, range1, range2, range3, range4, result, primary, complementary, triadic) {

  value1.innerText = range1;
  value2.innerText = range2 + "%";
  value3.innerText = range3 + "%";
  value4.innerText = range4;

  result.style.background = "hsla(" + range1 + ", " + range2 + "%, " + range3 + "%, " + range4 + ")";
  primary.innerHTML = "<div class='resultat_primary'>hsla(" + range1 + ", " + range2 + "%, " + range3 + "%, " + range4 +")</div>";

  let H = parseInt(range1)
  let complementaryH = H + 180 - 360
  let triadicH = H + 120 - 360

  function calcComplementary() {
    if(complementaryH < 0) {
      return complementaryH + 360
    } else {
      return complementaryH
    }
  }

  function calcTriadic() {
    if(triadicH < 0) {
      return triadicH + 360
    } else {
      return triadicH
    }
  }

  complementary.style.background = "hsla(" + calcComplementary() + ", " + range2 + "%, " + range3 + "%, " + range4 + ")";
  complementary.innerHTML = "<div class='resultat_complementary'><strong>Complementary: </strong>hsla(" + calcComplementary() + ", " + range2 + "%, " + range3 + "%, " + range4 + ")</div>";

  triadic.style.background = "hsla(" + calcTriadic() + ", " + range2 + "%, " + range3 + "%, " + range4 + ")";
  triadic.innerHTML = "<div class='resultat_complementary'><strong>Triadic: </strong>hsla(" + calcTriadic() + ", " + range2 + "%, " + range3 + "%, " + range4 + ")</div>";

}

let hslaDefFunc = function () {
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let primary = document.querySelector('.primary')
  let complementary = document.querySelector('.complementary')
  let triadic = document.querySelector('.triadic')
  hslaDef(values[0], values[1], values[2], values[3], ranges[0].value, ranges[1].value, ranges[2].value, ranges[3].value, result, primary,complementary,triadic)
}

// -----------------------------------------------------------------------
// DISPLAY DYNAMIC VALUES
// -----------------------------------------------------------------------

// HSL
hslDefFunc()

// RGBA
hslaDefFunc()

// Check opacity
function checkOpacity() {
  // Get the checkbox
  let checkBox = document.getElementById("checkOpacity")
  // Get the opacity container
  let opacitySelector = document.getElementById("opacitySelector")
  // Get opacity range
  let opacityRange = document.querySelector('#opacitySelector input')
  // If the checkbox is checked
  if (checkBox.checked == true) {
    // Show opacity range
    opacitySelector.style.display = "flex";
    // Apply rgba function
    hslaDefFunc()
  } else {
    // Hide opacity range
    opacitySelector.style.display = "none";
    // Reinitialize opacity value
    opacityRange.value = 1
    // Apply rgb function
    hslDefFunc()
  }
}
checkOpacity()

// Display values
function showValue(value) {
  checkOpacity()
}
