module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: ['babel-polyfill', `${__dirname}/src/index.jsx`],
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {'modules': false}], 'react', 'flow'],
              plugins: ['transform-flow-strip-types']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [],
  performance: {
    hints: false
  },
  serve: {
    content: 'public/',
    open: true,
    port: 3000
  }
};
