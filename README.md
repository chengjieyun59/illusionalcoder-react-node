# illusionalcoder-react-node
A rewrite of illusionalcoder in html/css

$ npm -y init
$ npm install
$ npm i express react react-dom
$ npm install nodemon webpack webpack-cli --save-dev

add scripts in package.json:
"nodemon": "nodemon server/app.js"
"build": "webpack --config webpack.config.js"

$ mkdir server && touch $_/app.js
Copy and paste from https://expressjs.com/en/starter/hello-world.html
Go to http://localhost:3000/ to check for Hello World!

In app.js, get from '/':
res.sendFile(path.join(__dirname + '/index.html'))

Create index.html with ! to auto-populate
$ npm run nodemon

