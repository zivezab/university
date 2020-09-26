This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

_Login and Register didn't complete_

## Quick Start

### `npm install && npm start`

To see the webpage

### `npm run test -- --coverage --watchAll=false`

To see the test coverage

```
-------------------------|----------|----------|----------|----------|-------------------|
File                     |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------|----------|----------|----------|----------|-------------------|
All files                |    44.44 |       50 |    33.33 |    45.45 |                   |
 src                     |        0 |      100 |        0 |        0 |                   |
  App.js                 |        0 |      100 |        0 |        0 |                12 |
  index.js               |        0 |      100 |      100 |        0 |                 6 |
 src/components          |    27.91 |       50 |    22.22 |    29.27 |                   |
  ExportJSON.js          |     12.5 |      100 |        0 |     12.5 |    2,3,5,7,8,9,10 |
  FavoriteButton.js      |      100 |       50 |    33.33 |      100 |                 7 |
  UniversityCards.js     |    27.27 |       50 |    21.43 |    29.03 |... ,85,86,104,110 |
 src/components/Favorite |       75 |       50 |       60 |       75 |                   |
  Favorite.js            |       75 |       50 |       60 |       75 |             17,33 |
 src/components/Home     |      100 |      100 |      100 |      100 |                   |
  Home.js                |      100 |      100 |      100 |      100 |                   |
 src/components/Login    |      100 |      100 |      100 |      100 |                   |
  Login.js               |      100 |      100 |      100 |      100 |                   |
 src/components/Navbar   |    83.33 |       50 |       75 |    83.33 |                   |
  MenuItems.js           |      100 |      100 |      100 |      100 |                   |
  Navbar.js              |       80 |       50 |       75 |       80 |                21 |
 src/components/Search   |    51.72 |       50 |       20 |    51.72 |                   |
  SearchInput.js         |       60 |       50 |       25 |       60 |             16,29 |
  SearchPage.js          |    47.83 |      100 |    14.29 |    47.83 |... 26,28,32,36,46 |
  countries.js           |      100 |      100 |      100 |      100 |                   |
-------------------------|----------|----------|----------|----------|-------------------|
```

### `eslint src/**/*.js --fix`

To lint js files before commit

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
