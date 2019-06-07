const path = require('path');
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'eval-source-map';
            config.output.devtoolModuleFilenameTemplate = info =>
      
              info.resourcePath.match(/\.vue$/) && !info.identifier.match(/type=script/) // this is change ✨
              ?
              `webpack-generated:///${info.resourcePath}?${info.hash}` :
              `webpack-yourCode:///${info.resourcePath}`;
      
            config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]';
          }
        resolve: {
            //allow for @ or @src alias for src
            alias: require('./aliases.config').webpack
        }
    },
    chainWebpack: config => {
        //turn off elint for webpack transpile
        config.module.rules.delete('eslint');
    },
    runtimeCompiler: true,
    css: {
        sourceMap: true
    },
    publicPath: '',
    //build for docs folder to enable gh-pages hosting
    outputDir: './docs/',
    assetsDir: 'assets'
}