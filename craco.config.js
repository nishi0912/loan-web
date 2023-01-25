
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                "@primary-color": "#1F232F",
                "@btn-primary-bg": "#347AF0",
                "@layout-body-background": "#1F232F"
                // "@link-color": "#1DA57A",
                // "@border-radius-base": "2px",  
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};