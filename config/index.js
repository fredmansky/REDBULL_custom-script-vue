'use strict';
const path = require('path');

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',

    /**
     * Source Maps
     */
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',

    /**
     * Source Maps
     */
    productionSourceMap: false
  }
}
