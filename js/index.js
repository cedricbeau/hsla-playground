// -----------------------------------------------------------------------
// DISPLAY DYNAMIC VALUES
// -----------------------------------------------------------------------

var hslaPlayground = {

  ranges: document.querySelectorAll(".selector_range"),

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

    let H = parseInt(this.ranges[0].value)
        S = parseInt(this.ranges[1].value),
        L = parseInt(this.ranges[2].value),
        A = this.ranges[3].value,
        values =  document.querySelectorAll(".selector_value");

    values[0].innerText = H;
    values[1].innerText = S + "%";
    values[2].innerText = L + "%";
    values[3].innerText = A;

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
   * @param {*} N = name
   * @param {*} H = hue
   * @param {*} S = saturation
   * @param {*} L = lightness
   * @param {*} A = alpha
   */
  _createDisplay: function(N, H, S, L, A) {

    return "<div class='result_primary'>" +
      "<div class='color_title'><strong>" + N + "</strong></div>" +
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
      "</div>"
  },

  /**
   *
   * @param {*} H = hue
   * @param {*} S = saturation
   * @param {*} L = lightness
   * @param {*} A = alpha
   */
  _createBackground: function(H, S, L, A) {
    return "hsla(" + H + ", " + S + "%, " + L + "%, " + A + ")";
  },

  /**
   *
   * @param {*} H = hue
   * @param {*} S = saturation
   * @param {*} L = lightness
   * @param {*} A = alpha
   */
  _displayPrimary: function(H, S, L, A) {
    let primary = document.querySelector('.primary');

    primary.style.background = this._createBackground(H, S, L, A);
    primary.innerHTML = this._createDisplay('Primary', H, S, L, A);
  },

  /**
   *
   * @param {*} H = hue
   * @param {*} S = saturation
   * @param {*} L = lightness
   * @param {*} A = alpha
   */
  _displayComplementary: function(H, S, L, A) {
    H = H + 180 - 360;
    let complementary = document.querySelector('.complementary');

    complementary.style.background = this._createBackground(this._calcComplementary(H), S, L, A);
    complementary.innerHTML = this._createDisplay('Complementary', this._calcComplementary(H), S, L, A);
  },

  /**
   *
   * @param {*} H = hue
   * @param {*} S = saturation
   * @param {*} L = lightness
   * @param {*} A = alpha
   */
  _displayTriadic: function(H, S, L, A) {
    H = H + 120 - 360;
    let triadic = document.querySelector('.triadic');

    triadic.style.background = this._createBackground(this._calcTriadic(H), S, L, A);
    triadic.innerHTML = this._createDisplay('Complementary', this._calcTriadic(H), S, L, A);
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