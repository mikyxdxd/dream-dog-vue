module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      {test:/\.css$/,loader:'style!css'},
      {test:/\.scss$/, loaders: ["style", "css", "sass"]},
      {test: /\.styl$/, loader: "style!css!stylus" },
      {test:/\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,loader:'file'},
      {test: /\.html$/, loader: "html" }
    ]
  }
}