const withLess = require('next-with-less');

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        '@primary-color': '#1890ff', // Customize Ant Design's theme
      },
      javascriptEnabled: true,
    },
  },
});
