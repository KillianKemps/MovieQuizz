var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'defaultRoute',
    'play': 'play',
    'gameOver': 'gameOver',
  },

  defaultRoute: function () {
    console.log('Route par défaut');
    this.loadView(new HomeView())
  },

  play: function() {
    console.log('Play route');
    this.loadView(new QuizzListView())
  },

  gameOver: function() {
    console.log('GameOver route');
  },

  loadView: function(view) {
    this.view && this.view.remove();
    this.view = view;
  }
});

// Initialize the router

var Router = new AppRouter();

// Mandatory! Start the routing

Backbone.history.start();

// Listen the routing

Router.on('route', function(route) {
  console.log('Lets go to ' + route);
});

// Trigger manually a route

//Router.navigate('#play', { trigger: true });

// Display the fragment

console.log(Backbone.history.fragment);
