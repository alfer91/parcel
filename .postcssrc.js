// ESM - browser
// CommonJS - node.js

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    autoprefixer
  ]
}

// 간소화
// module.exports = {
//   plugins: [
//     require('autoprefixer')
//   ]
// }