# illusionalcoder-react-node
A rewrite of illusionalcoder in html/css
To run the app:
```
$ npm install
$ npm run build
$ npm start
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
