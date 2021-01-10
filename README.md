# illusionalcoder-react-node
A rewrite of illusionalcoder in html/css
To run the app in development:
```
$ npm install
$ npm run dev
```

$ npm -y init
$ npm install
$ npm i express react react-dom
$ npm install nodemon webpack webpack-cli --save-dev

add scripts in package.json:
"start": "nodemon server/app.js"
"build": "webpack --config webpack.config.js"

$ mkdir server && touch $_/app.js
Copy and paste from https://expressjs.com/en/starter/hello-world.html
Go to http://localhost:3000/ to check for Hello World!

In app.js, 
app.use(express.static('./dist', {
  index: "index.html"
}))

Create index.html with ! to auto-populate
$ npm start

Create webpack config file
$ npx webpack-cli init
$ npx webpack
$ npm run build
$ npm start

$ touch .babelrc
Copy into file
{
  "presets": [
    "@babel/preset-react"
  ]
}
$ npm install --save-dev @babel/preset-react

$ npm install --save-dev jest babel-jest @babel/preset-env react-test-renderer
In package.json, add script "test": "jest"
In .babelrc, add another preset "@babel/preset-env"
Create simple App.test
Move App component to its own App.jsx
$ npm run test

Add webpack hot reloading plugin, HotModuleReplacementPlugin
Make hot: true
Change package.json script
"start": "webpack --mode development --watch"
$ npm install style-loader css-loader sass-loader node-sass
$ npm install webpack-dev-server --save-dev
Change package.json scripts to use node env
"build": "NODE_ENV=production webpack",
"dev": "webpack-dev-server --open NODE_ENV=development",