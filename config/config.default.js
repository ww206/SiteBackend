'use strict';

module.exports = appInfo => {
  const config = exports = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      }
    },
    news: {
      pageSize: 5,
      serverUrl: 'https://www.baidu.com',
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531565841974_7838';

  // add your config here
  config.middleware = [];

  return config;
};
