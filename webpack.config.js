const path = require('path')
module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts', '.gql'],
    root: path.resolve(__dirname),
    alias: { '@': path.resolve(__dirname), '~': path.resolve(__dirname) },
  },
}
