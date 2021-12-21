const eslintrc = require('./.eslintrc.js');

const baseConfig = { extends : ['@reflektor/vue'] };
const nuxtConfig = {
  plugins : [
    'nuxt'
  ],
  extends : [
    ...baseConfig.extends,
    'plugin:nuxt/recommended'
    // TODO: Add Nuxt config here
  ],
  /*
   * Globals, mainly used for Nuxt's auto-imports.
   * Please review this list if this boilerplate
   * was cloned for another project.
   */
  globals : {
    'useGsapPlugins'          : true,
    'useWindowResizeListener' : true,
    'useNonFunctionalCheck'   : true
  },
};

module.exports = {
  extends : eslintrc.extends,
  configs : {
    base : baseConfig,
    nuxt : nuxtConfig
  }
};
