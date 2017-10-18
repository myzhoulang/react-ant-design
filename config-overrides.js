const {
  injectBabelPlugin
} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less')
const  theme  = require('./theme')


module.exports = function override(config, env) {
	// ant design 样式按需加载
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    style: true
  }], config);

  // ant design 主题设置
  config = rewireLess(config, env, {
    modifyVars: theme,
  });
  return config;
}
