# Minimal reproduction case for https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/579

## Steps to reproduce

1. `npm install`
2. `node_modules/.bin/webpack-dev-server --no-inline`
3. Open `http://localhost:8080/` in a browser
4. Open the dev tools
5. Notice no errors are logged
6. Open the sources pane or network tab and view `main.built.js`
7. Notice the entry with `module.exports = jQuery;`
8. Change `public/yesExtract.css` (for example, change the background color)
9. Notice the app recompiles with no errors
10. Refresh the page
11. Notice an error is logged to the console
12. Notice `main.built.js` no longer has an entry with `module.exports = jQuery`. Requires that were meant to reach that module incorrectly point to another, which is why the above logged call fails.
