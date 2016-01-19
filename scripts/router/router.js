var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'defaultRoute',
    'play': 'play',
    'gameOver': 'gameOver',
  },

  defaultRoute: function () {
    this.loadView(new HomeView())
  },

  play: function() {
    this.loadView(new QuizzListView())
  },

  gameOver: function() {
    this.loadView(new GameOverView())
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
