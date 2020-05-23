var app = new Vue({
  el: '#app',
  data: {

    // Links site & Repo
    links: {
      site: "https://cedricbeau.pro/",
      siteTitle: "Lien vers mon site perso",
      repo: "https://github.com/cedricbeau/hsla-playground",
      repoTitle: "Lien vers le repo GitHub du projet",
    },

    // Default values
    defaultValues : [
      {
        id: 1,
        name: 'Primary',
        H: 210,
        S: '100%',
        L: '50%',
        A: 1
      },
     {
        id: 2,
        name: 'Complementary',
        H: 30,
        S: '100%',
        L: '50%',
        A: 1
      },
     {
        id: 3,
        name: 'Triadic',
        H: 330,
        S: '100%',
        L: '50%',
        A: 1
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
  }
});