module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-replace')({
      pattern: /\.bulma\s(\.container[^{,]+)/g,
      data: {
        replaceAll: '.bulma$1, .bulma $1'
      }
    })
  ]
}
