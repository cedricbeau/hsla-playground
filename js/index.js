// -----------------------------------------------------------------------
// DISPLAY DYNAMIC VALUES
// -----------------------------------------------------------------------

var hslaPlayground = {

  ranges: document.querySelectorAll(".selector_range"),
  values: document.querySelectorAll(".selector_value"),
  primary: document.querySelector('.primary'),
  complementary: document.querySelector('.complementary'),
  triadic: document.querySelector('.triadic'),

  /**
   *
   */
  init: function() {
    this._displayHsla();
    this._showValues();
  },

  /**
   *
   */
  _displayHsla: function() {
    var H = parseInt(this.ranges[0].value)
        S = parseInt(this.ranges[1].value),
        L = parseInt(this.ranges[2].value),
        A = this.ranges[3].value;

    this.values[0].innerText = H;
    this.values[1].innerText = S + "%";
    this.values[2].innerText = L + "%";
    this.values[3].innerText = A;

    this._displayPrimary(H, S, L, A)
    this._displayComplementary(H, S, L, A)
    this._displayTriadic(H, S, L, A)
  },

  /**
   *
   * @param {*} color
   */
  _calcComplementary: function(color) {
    if(color < 0) {
      return color + 360
    } else {
      return color
    }
  },

  /**
   *
   * @param {*} color
   */
  _calcTriadic: function(color) {
    if(color < 0) {
      return color + 360
    } else {
      return color
    }
  },

  /**
   *
   * @param {*} H
   * @param {*} S
   * @param {*} L
   * @param {*} A
   */
  _displayPrimary: function(H, S, L, A) {
    this.primary.style.background = "hsla(" + H + ", " + S + "%, " + L + "%, " + A + ")";
    this.primary.innerHTML = "<div class='result_primary'>" +
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
  },

  /**
   *
   * @param {*} H
   * @param {*} S
   * @param {*} L
   * @param {*} A
   */
  _displayComplementary: function(H, S, L, A) {
    var H = H + 180 - 360;

    this.complementary.style.background = "hsla(" + this._calcComplementary(H) + ", " + S + "%, " + L + "%, " + A + ")";
    this.complementary.innerHTML = "<div class='result_complementary'>" +
    "<div class='color_title'><strong>Complementary</strong></div>" +
      "<div class='color_result'>" +
        "<div class='color_result_item h'>" +
          "<div class='color_result_value'>" + this._calcComplementary(H) + "</div> " +
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
  },

  /**
   *
   * @param {*} H
   * @param {*} S
   * @param {*} L
   * @param {*} A
   */
  _displayTriadic: function(H, S, L, A) {

    var H = H + 120 - 360;

    this.triadic.style.background = "hsla(" + this._calcTriadic(H) + ", " + S + "%, " + L + "%, " + A + ")";
    this.triadic.innerHTML = "<div class='result_complementary'>" +
    "<div class='color_title'><strong>Triadic</strong></div>" +
      "<div class='color_result'>" +
        "<div class='color_result_item h'>" +
          "<div class='color_result_value'>" + this._calcTriadic(H) + "</div> " +
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
  },

  /**
   *
   */
  _showValues: function() {
    var self = this;
    for (range of this.ranges) {
      range.addEventListener('input', function() {
        self._displayHsla()
      });
    }
  }
}
hslaPlayground.init();