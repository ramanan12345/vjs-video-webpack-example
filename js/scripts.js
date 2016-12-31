require('../css/styles.css');
require('../node_modules/video.js/dist/video-js.css');
(function () {
    'use strict';

    var angular = require('angular');
    var videojs = require('video.js');
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
})();