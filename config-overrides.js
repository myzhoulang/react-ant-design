const {
  injectBabelPlugin
} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less')
const  theme  = require('./theme')

console.log(theme)

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    style: true
  }], config);

  config = rewireLess(config, env, {
    modifyVars: theme,
  });
  return config;
};
