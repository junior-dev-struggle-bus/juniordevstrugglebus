const webpack = require('webpack')
require('dotenv').config()

module.exports = {
    configureWebpack: {
      plugins: [
          new webpack.DefinePlugin({
            REACT_APP_TESTVAL:JSON.stringify(process.env.REACT_APP_TESTVAL)
          })   
      ]
    }
  }