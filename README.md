# vjs-video webpack example

The [vjs-video](https://github.com/LonnyGomes/vjs-video) Angular directive supports both CommonJS and AMD based module loaders. This repository shows how to use [webpack](https://webpack.github.io) with `vjs-video`.

## Usage

The `vjs-video` Angular directive depends on both `angular` and `video.js`. It will require these modules implicitly but it is good to have the following somewhere in your code already.

```javascript
var angular = require('angular');
var videojs = require('video.js');
```
To use the directive, simply require it to load the `vjs-video` Angular module.

```javascript
var vjsVideoModule = require('vjs-video');

angular.module('app', ['vjs.video'])
    .controller('MainCtrl', ['$scope', function (scope) {

        //listen for the vjsVideoReady event
        scope.$on('vjsVideoReady', function (e, data) {
            //data contains `id`, `vid`, `player` and `controlBar`
            console.log('video id:' + data.id);
            console.log('video.js player instance:' + data.player);
        });
    }]);
```

## Running Example
To run the webpack example, type the following:

```bash
npm install
npm start
```