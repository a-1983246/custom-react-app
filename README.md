# custom-react-app

## who calls whom

- webpack-cli
  - webpack
  - `webpack.config.js`
    - webpack-dev-server
    - babel-loader
      - @babel/core
      - `babel.config.json`
        - @babel/preset-react

## typescript + babel

- capabilities
  - tsc: can transpile & can type check
  - babel: can transple
- choice
  - type check: tsc
  - transpile: babel
    - reason:
      - babel has more flexibility than tsc
      - responsbility is clear
