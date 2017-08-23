###chatty


A small chat app s,that accepts some image types, and exercises anonymity through randomized sessions and mutable names, and colour-coding to keep track of who's saying what during a session.


### Usage

run this command:
```
npm install
```
then run:
```
npm start
```
for the server.js in both the root and in the chatty_server folder to setup the socket server to listen on port 3000 and 3001

then visit http://localhost:3000 to see the site in action

Install the dependencies and start the server.

### Linting

This development environment includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* webSocket
