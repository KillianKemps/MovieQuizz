var AppRouter = Backbone.Router.extend({

   routes: {
    '': 'defaultRoute',
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

// Initialize the router

var Router = new AppRouter();

// Mandatory! Start the routing

Backbone.history.start();

// Listen the routing

Router.on('route', function(route) {

 console.log('Lets go to' + route);

});

// Trigger manually a route

//Router.navigate('#play', { trigger: true });

// Display the fragment

console.log(Backbone.history.fragment);
