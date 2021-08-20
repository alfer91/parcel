# Parcel
1. [프로젝트 생성](#프로젝트-생성)
1. [정적 파일 연결](#정적-파일-연결)
1. [autoprefixer](#autoprefixer)
1. [babel](#babel)
1. [CLI](#cli)
1. [저장소 업로드](#저장소-업로드)

# Parcel
## 프로젝트 생성
[reset.css cdn](https://www.jsdelivr.com/package/npm/reset-css)
```bash
$ npm init -y
$ npm i -D parcel-bundler
```
`package.json`
```json
"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
},
```
`main.js`
```js
console.log('Hello parcel')
```
`./scss/main.scss`
```scss
$color--black: #000;
$color--white: #fff;

body {
  background-color: $color--black;
  h1 {
    color: $color--white;
  }
}

```
`index.html`
```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
  <link rel="stylesheet" href="./scss/main.scss">
  <script defer src="./js/main.js"></script>
</head>
<body>
  <h1>Hello Parcel!!</h1>
</body>
```

## 정적 파일 연결
[logo.png](https://heropy.blog/css/images/logo.png)  
[ico converter](https://www.icoconverter.com/) - 32 pixels - favicon.ico 생성  
[parcel plugin static files copy](https://www.npmjs.com/package/parcel-plugin-static-files-copy) - 지정한 경로(static)의 resources를 build 시 dist 폴더 안에 자동으로 넣어줌  
`./images/logo.png`  
`./static/favicon.ico`  
```bash
$ npm install -D parcel-plugin-static-files-copy
```
`package.json`
```json
"staticFiles": {
  "staticPath": "static"
}
```
`index.html`
```html
<body>
  <h1>Hello Parcel!!</h1>
  <img src="./images/logo.png" alt="HEROPY"/>
</body>
```

## autoprefixer
[autoprefixer](https://github.com/postcss/autoprefixer#cli)  
공급 업체 접두사 (Vender prefix) - 보험
```bash
npm i -D postcss-cli autoprefixer
```
`package.json`
```json
"browserslist": [
  "> 1%",
  "last 2 versions"
]
```
`.postcssrc.js`
```js
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
```
```bash
$ npm run dev
* error  PostCSS plugin autoprefixer requires PostCSS 8. // 호환성, Downgrade your autoprefixer to version 9
$ npm i -D autoprefixer@9
$ npm run dev
```
`./scss/main.scss`
```scss
$color--black: #000;
$color--white: #fff;

body {
  background-color: $color--black;
  h1 {
    color: $color--white;
    display: flex;
    // display: -webkit-box;
    // display: -ms-flexbox;
  }
}
```

## babel
[babel](https://babeljs.io/setup#installation)  
 > ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 버전으로 변환(compile)
```bash
npm i -D @babel/core @babel/preset-env
```
`package.json`
```json
"browserslist": [
  "> 1%",
  "last 2 versions"
]
```
`.babelrc.js`
```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}
```
`main.js`
```js
console.log('Hello parcel')

async function test() { // 비동기 함수
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()
```
```bash
$ npm run dev
* console error  regeneratorRuntime is not defined
$ npm i -D @babel/plugin-transform-runtime  // 기본설정은 async, await 제공안함
$ npm run dev
```

## CLI
[parcel - CLI](https://ko.parceljs.org/cli.html)  
`package.json`
```json
"scripts": {
  "dev": "parcel index.html --port 1216",
  "build": "parcel build index.html"
},
```
```bash
$ npm run dev
```

## 저장소 업로드
`.gitignore`
```bash
$ git init
$ git add .
$ git commit -m "parcel"
$ git remote add origin https:github.com/parcel.git
$ git push origin master
```
