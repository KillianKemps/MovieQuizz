//On déclare un routeur

var AppRouter = Backbone.Router.extend({

  // On les déclare dans le hash routes

   routes: {
   // Route par défaut
    '': 'defaultRoute',
   // Route #/about
    'play': 'play',
    'gameOver': 'gameOver',
   },

   defaultRoute: function () {
     console.log('Route par défaut');
   },

   play: function() {
     console.log('play');
   },

   gameOver: function() {
      console.log('gameOver');
   }
});

// On initialise le routeur

var Router = new AppRouter();

// OBLIGATOIRE !

// Permet de démarrer le routing

Backbone.history.start();

// Ecouter le routage

Router.on('route', function(route) {

 console.log('Lets go to' + route);

});

// Trigger une route à la main

Router.navigate('#play', { trigger: true });

// Affiche le fragment

// Ici ce sera #about

console.log(Backbone.history.fragment);
