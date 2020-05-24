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

      let ranges = document.querySelectorAll(".selector__range"),
          H = parseInt(ranges[0].value)
          S = parseInt(ranges[1].value),
          L = parseInt(ranges[2].value),
          A = ranges[3].value,
          values =  document.querySelectorAll(".selector__value");

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
     * @param {number} color
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
     * @param {number} H = hue
     * @param {number} S = saturation
     * @param {number} L = lightness
     * @param {number} A = alpha
     */
    _updateColors: function(H, S, L, A) {

      return "<div class='details__content'>" +
              "<div class='details__value'>" + H + "</div> " +
              "<div class='details__label'>H</div> " +
            "</div>" +
            "<div class='details__content'>" +
              "<div class='details__value'>" + S + "%</div> " +
              "<div class='details__label'>S</div> " +
            "</div>" +
            "<div class='details__content'>" +
              "<div class='details__value'>" + L + "%</div> " +
              "<div class='details__label'>L</div> " +
            "</div>" +
            "<div class='details__content'>" +
              "<div class='details__value'>" + A + "</div> " +
              "<div class='details__label'>A</div> " +
            "</div>"
    },

    /**
     *
     * @param {number} H = hue
     * @param {number} S = saturation
     * @param {number} L = lightness
     * @param {number} A = alpha
     */
    _updateBackground: function(H, S, L, A) {
      return "hsla(" + H + ", " + S + "%, " + L + "%, " + A + ")";
    },

    /**
     *
     * @param {number} H = hue
     * @param {number} S = saturation
     * @param {number} L = lightness
     * @param {number} A = alpha
     */
    _displayPrimary: function(H, S, L, A) {
      let bloc = document.querySelector('.primary');
      let details = document.querySelector('.primary .color__details');

      bloc.style.background = this._updateBackground(H, S, L, A);
      details.innerHTML = this._updateColors(H, S, L, A);
    },

    /**
     *
     * @param {function} H = hue
     * @param {number} S = saturation
     * @param {number} L = lightness
     * @param {number} A = alpha
     */
    _displayComplementary: function(H, S, L, A) {
      H = H + 180 - 360;
      let bloc = document.querySelector('.complementary');
      let details = document.querySelector('.complementary .color__details');

      bloc.style.background = this._updateBackground(this._calcComplementary(H), S, L, A);
      details.innerHTML = this._updateColors(this._calcComplementary(H), S, L, A);
    },

    /**
     *
     * @param {function} H = hue
     * @param {number} S = saturation
     * @param {number} L = lightness
     * @param {number} A = alpha
     */
    _displayTriadic: function(H, S, L, A) {
      H = H + 120 - 360;
      let bloc = document.querySelector('.triadic');
      let details = document.querySelector('.triadic .color__details');

      bloc.style.background = this._updateBackground(this._calcTriadic(H), S, L, A);
      details.innerHTML = this._updateColors(this._calcTriadic(H), S, L, A);
    },
  }
});