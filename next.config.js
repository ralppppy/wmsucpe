const withCSS = require("@zeit/next-css")
const withImages = require("next-images")

module.exports = withImages(
   withCSS({
      cssLoaderOptions: {
         url: false
      },
      webpack(config, { dev }) {
         if (true) {
            config.devtool = "cheap-module-source-map"
         }
         return config
      }
   })
)

// module.exports = withSass({
//    webpack(config, { dev }) {
//      if (dev) {
//        config.devtool = 'cheap-module-source-map';
//      }
//      return config;
//    }
//  });
