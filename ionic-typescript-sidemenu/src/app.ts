/// <reference path="../typings/tsd.d.ts" />
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state("app", {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: "AppCtrl as ctrl"
    })

    .state("app.search", {
      url: "/search",
      views: {
        "menuContent": {
          templateUrl: "templates/search.html"
        }
      }
    })

    .state("app.browse", {
      url: "/browse",
      views: {
        "menuContent": {
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state("app.playlists", {
      url: "/playlists",
      views: {
        "menuContent": {
          templateUrl: "templates/playlists.html",
          controller: "PlaylistsCtrl as ctrl"
        }
      }
    })

    .state("app.single", {
      url: "/playlists/:playlistId",
      views: {
        "menuContent": {
          templateUrl: "templates/playlist.html",
          controller: "PlaylistCtrl as ctrl"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise("/app/playlists");
});
