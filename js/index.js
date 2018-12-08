// -----------------------------------------------------------------------
// GET HSL
// -----------------------------------------------------------------------

function hslDef(value1, value2, value3, range1, range2, range3, primary, complementary, triadic) {

  let H = parseInt(range1)
      S = parseInt(range2),
      L = parseInt(range3),
      complementaryH = H + 180 - 360,
      triadicH = H + 120 - 360

  value1.innerText = H;
  value2.innerText = S + "%";
  value3.innerText = L + "%";

  // calc complementary
  function calcComplementary() {
    if(complementaryH < 0) {
      return complementaryH + 360
    } else {
      return complementaryH
    }
  }

  // calc triadic
  function calcTriadic() {
    if(triadicH < 0) {
      return triadicH + 360
    } else {
      return triadicH
    }
  }

  // set primary
  primary.style.background = "hsl(" + H + ", " + S + "%, " + L + "%)";
  primary.innerHTML = "<div class='result_primary'>" +
  "<div class='color_title'><strong>Primary</strong></div>" +
    "<div class='color_result'>" +
      "<div class='color_result_item h'>" +
        "<div class='color_result_value'>" + H + "</div> " +
        "<div class='color_result_def'>H</div> " +
      "</div>" +
      "<div class='color_result_item s'>" +
        "<div class='color_result_value'>" + S + "%</div> " +
        "<div class='color_result_def'>S</div> " +
      "</div>" +
      "<div class='color_result_item l'>" +
        "<div class='color_result_value'>" + L + "%</div> " +
        "<div class='color_result_def'>L</div> " +
      "</div>" +
    "</div>" + 
  "</div>";

  // set complementary
  complementary.style.background = "hsl(" + calcComplementary() + ", " + S + "%, " + L + "%)";
  complementary.innerHTML = "<div class='result_complementary'>" +
  "<div class='color_title'><strong>Complementary</strong></div>" +
    "<div class='color_result'>" +
      "<div class='color_result_item h'>" +
        "<div class='color_result_value'>" + calcComplementary() + "</div> " +
        "<div class='color_result_def'>H</div> " +
      "</div>" +
      "<div class='color_result_item s'>" +
        "<div class='color_result_value'>" + S + "%</div> " +
        "<div class='color_result_def'>S</div> " +
      "</div>" +
      "<div class='color_result_item l'>" +
        "<div class='color_result_value'>" + L + "%</div> " +
        "<div class='color_result_def'>L</div> " +
      "</div>" +
    "</div>" + 
  "</div>";

  // set triadic
  triadic.style.background = "hsl(" + calcTriadic() + ", " + S + "%, " + L + "%)";
  triadic.innerHTML = "<div class='result_complementary'>" +
  "<div class='color_title'><strong>Triadic</strong></div>" +
    "<div class='color_result'>" +
      "<div class='color_result_item h'>" +
        "<div class='color_result_value'>" + calcTriadic() + "</div> " +
        "<div class='color_result_def'>H</div> " +
      "</div>" +
      "<div class='color_result_item s'>" +
        "<div class='color_result_value'>" + S + "%</div> " +
        "<div class='color_result_def'>S</div> " +
      "</div>" +
      "<div class='color_result_item l'>" +
        "<div class='color_result_value'>" + L + "%</div> " +
        "<div class='color_result_def'>L</div> " +
      "</div>" +
    "</div>" + 
  "</div>";

}

function hslDefFunc() {
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let primary = document.querySelector('.primary')
  let complementary = document.querySelector('.complementary')
  let triadic = document.querySelector('.triadic')
  hslDef(values[0], values[1], values[2], ranges[0].value, ranges[1].value,ranges[2].value, primary,complementary,triadic)
}

// -----------------------------------------------------------------------
// GET HSLA
// -----------------------------------------------------------------------

let hslaDef = function (value1, value2, value3, value4, range1, range2, range3,range4, primary, complementary, triadic) {

  let H = parseInt(range1)
      S = parseInt(range2),
      L = parseInt(range3),
      A = range4,
      complementaryH = H + 180 - 360,
      triadicH = H + 120 - 360

  value1.innerText = H;
  value2.innerText = S + "%";
  value3.innerText = L + "%";
  value4.innerText = A;

  // calc complementary
  function calcComplementary() {
    if(complementaryH < 0) {
      return complementaryH + 360
    } else {
      return complementaryH
    }
  }

  // calc triadic
  function calcTriadic() {
    if(triadicH < 0) {
      return triadicH + 360
    } else {
      return triadicH
    }
  }

  // set primary
  primary.style.background = "hsla(" + H + ", " + S + "%, " + L + "%, " + A + ")";
  primary.innerHTML = "<div class='result_primary'>" +
  "<div class='color_title'><strong>Primary</strong></div>" +
    "<div class='color_result'>" +
      "<div class='color_result_item h'>" +
        "<div class='color_result_value'>" + H + "</div> " +
        "<div class='color_result_def'>H</div> " +
      "</div>" +
      "<div class='color_result_item s'>" + 
        "<div class='color_result_value'>" + S + "%</div> " +
        "<div class='color_result_def'>S</div> " +
      "</div>" +
      "<div class='color_result_item l'>" +
        "<div class='color_result_value'>" + L + "%</div> " +
        "<div class='color_result_def'>L</div> " +
      "</div>" +
      "<div class='color_result_item a'>" + 
        "<div class='color_result_value'>" + A + "</div> " +
        "<div class='color_result_def'>A</div> " +
      "</div>" +
    "</div>" + 
  "</div>";

  // set complementary
  complementary.style.background = "hsla(" + calcComplementary() + ", " + S + "%, " + L + "%, " + A + ")";
  complementary.innerHTML = "<div class='result_complementary'>" +
  "<div class='color_title'><strong>Complementary</strong></div>" +
    "<div class='color_result'>" +
      "<div class='color_result_item h'>" +
        "<div class='color_result_value'>" + calcComplementary() + "</div> " +
        "<div class='color_result_def'>H</div> " +
      "</div>" +
      "<div class='color_result_item s'>" + 
        "<div class='color_result_value'>" + S + "%</div> " +
        "<div class='color_result_def'>S</div> " +
      "</div>" +
      "<div class='color_result_item l'>" +
        "<div class='color_result_value'>" + L + "%</div> " +
        "<div class='color_result_def'>L</div> " +
      "</div>" +
      "<div class='color_result_item a'>" +
        "<div class='color_result_value'>" + A + "</div> " +
        "<div class='color_result_def'>A</div> " +
      "</div>" +
    "</div>" + 
  "</div>";

  // set triadic
  triadic.style.background = "hsla(" + calcTriadic() + ", " + S + "%, " + L + "%, " + A + ")";
  triadic.innerHTML = "<div class='result_complementary'>" +
  "<div class='color_title'><strong>Triadic</strong></div>" +
    "<div class='color_result'>" +
      "<div class='color_result_item h'>" +
        "<div class='color_result_value'>" + calcTriadic() + "</div> " +
        "<div class='color_result_def'>H</div> " +
      "</div>" +
      "<div class='color_result_item s'>" +
        "<div class='color_result_value'>" + S + "%</div> " +
        "<div class='color_result_def'>S</div> " +
      "</div>" +
      "<div class='color_result_item l'>" +
        "<div class='color_result_value'>" + L + "%</div> " +
        "<div class='color_result_def'>L</div> " +
      "</div>" +
      "<div class='color_result_item a'>" +
        "<div class='color_result_value'>" + A + "</div> " +
        "<div class='color_result_def'>A</div> " +
      "</div>" +
    "</div>" +
  "</div>";

}

let hslaDefFunc = function () {
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let primary = document.querySelector('.primary')
  let complementary = document.querySelector('.complementary')
  let triadic = document.querySelector('.triadic')
  hslaDef(values[0], values[1], values[2], values[3], ranges[0].value, ranges[1].value, ranges[2].value, ranges[3].value, primary,complementary,triadic)
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
