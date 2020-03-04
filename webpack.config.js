const path = require("path");

module.exports = {
  //importando o caminho do js main
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [{
        test: /\.js$/, //expressão regrular pro babel encontrar o arquivo
        exclude: /nodemodules/, //desconsiderar os arqivos js do odemodules
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }

    ]
  }
};