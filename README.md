## Skeletal Theme

## Dependencies
* [Node JS](http://nodejs.org/)

## Installation
1. cd into the root directory of the theme where `pacakage.json` is located.
2. run `npm install`

## Running
1. If you want to compile all the javascript and css once, run `npm run webpack`.
2. If you don't want to compile your javascript and css every time you make a change, you can run `npm run webpack -- --progress --colors --watch` instead. This will keep a "watch" task running in your shell, so if you want to navigate the directories, you will probably want to open another shell to do that.

## Folder Structure

* `app/`: All the pages of the theme go in the root  of this folder
* `app/js/`: All the JS files should be added here.
* `app/css/`: All the custom css should be added here.
* `app/images/`: All the custom images should be added here.
* `app/fonts/`: All the custom fonts should be added here.
* `app/templates/`: This is where the underscore templates live.
* `build`: This is where the theme is written after it has been compiled. This directory should never be touched, since it only contains generated code.
* `gulp`: All gulp tasks go here.
* `webpack.config.js`: This is where the configuration for the webpack lives.
* `package.json`: This contains all the js libraries required by the theme.
* `node_modules`: This is where the dependencies from package.json are saved.
* `README.md`: You're reading it.

## How it works
Webpack takes all the js (including vendor libraries) and css, and bundles them into `main.js`, `vendor.js` and `main.css`. When a theme is deployed, webpack takes care of compiling all links and making them production ready.

## Installing a new JS library
If you want to install a new library, add it to package.json. Please avoid downloading third party libraries into the JS directory.
