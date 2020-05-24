var app = new Vue({
  el: '#app',
  data: {

    // Links site & Repo
    links: {
      siteUrl: "https://cedricbeau.pro/",
      siteTitle: "Lien vers mon site perso",
      repoUrl: "https://github.com/cedricbeau/hsla-playground",
      repoTitle: "Lien vers le repo GitHub du projet",
    },

    // Default values
    defaultValues : [
      {
        id: 1,
        name: 'primary',
        H: 210,
        S: '100%',
        L: '50%',
        A: 1,
        defaultBackground: 'hsla(210, 100%, 50%, 1)'
      },
     {
        id: 2,
        name: 'complementary',
        H: 30,
        S: '100%',
        L: '50%',
        A: 1,
        defaultBackground: 'hsla(30, 100%, 50%, 1)'
      },
     {
        id: 3,
        name: 'triadic',
        H: 330,
        S: '100%',
        L: '50%',
        A: 1,
        defaultBackground: 'hsla(330, 100%, 50%, 1)'
      }
    ],

    // Selectors
    selectors: [
      {
        id: 1,
        name: 'Hue',
        defaultValue: 210,
        valueMin: 0,
        valueMax: 360,
        step: 1
      },
      {
        id: 2,
        name: 'Saturation',
        defaultValue: 100,
        valueMin: 0,
        valueMax: 100,
        step: 1
      },
      {
        id: 3,
        name: 'Lightness',
        defaultValue: 50,
        valueMin: 0,
        valueMax: 100,
        step: 1
      },
      {
        id: 4,
        name: 'Alpha',
        defaultValue: 1,
        valueMin: 0,
        valueMax: 1,
        step: 0.01
      }
    ]
  },
  methods: {

    _displayHsla: function() {

      let ranges = document.querySelectorAll(".selector_range"),
          H = parseInt(ranges[0].value)
          S = parseInt(ranges[1].value),
          L = parseInt(ranges[2].value),
          A = ranges[3].value,
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
    _updateColors: function(N, H, S, L, A) {

      return "<div class='result_content'>" +
        "<div class='color_title'><strong>" + N + "</strong></div>" +
          "<div class='color_result'>" +
            "<div class='color_result_item'>" +
              "<div class='color_result_value'>" + H + "</div> " +
              "<div class='color_result_def'>H</div> " +
            "</div>" +
            "<div class='color_result_item'>" +
              "<div class='color_result_value'>" + S + "%</div> " +
              "<div class='color_result_def'>S</div> " +
            "</div>" +
            "<div class='color_result_item'>" +
              "<div class='color_result_value'>" + L + "%</div> " +
              "<div class='color_result_def'>L</div> " +
            "</div>" +
            "<div class='color_result_item'>" +
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
    _updateBackground: function(H, S, L, A) {
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

      primary.style.background = this._updateBackground(H, S, L, A);
      primary.innerHTML = this._updateColors('primary', H, S, L, A);
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

      complementary.style.background = this._updateBackground(this._calcComplementary(H), S, L, A);
      complementary.innerHTML = this._updateColors('complementary', this._calcComplementary(H), S, L, A);
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

      triadic.style.background = this._updateBackground(this._calcTriadic(H), S, L, A);
      triadic.innerHTML = this._updateColors('triadic', this._calcTriadic(H), S, L, A);
    },
  }
});