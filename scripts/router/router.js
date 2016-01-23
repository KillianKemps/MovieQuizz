var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'defaultRoute',
    'play': 'play',
    'gameOver': 'gameOver',
  },

  defaultRoute: function () {
    this.view && this.view.remove();
    if (this.homeView == null) {
      this.homeView = new HomeView;
    }
    else {
      this.homeView.reset && this.homeView.reset();
      this.homeView.render();
    }
    this.view = this.homeView;
  },

  play: function() {
    this.view && this.view.remove();
    if (this.playView == null) {
      this.playView = new QuizzListView;
    }
    else {
      this.playView.reset && this.playView.reset();
      this.playView.render();
    }
    this.view = this.playView;
  },

  gameOver: function() {
    this.view && this.view.remove();
    if (this.gameOverView == null) {
      this.gameOverView = new GameOverView;
    }
    else {
      this.gameOverView.reset && this.gameOverView.reset();
      this.gameOverView.render();
    }
    this.view = this.gameOverView;
  }
});

// Initialize the router

var Router = new AppRouter();

// Mandatory! Start the routing

Backbone.history.start();

// Display the fragment

console.log(Backbone.history.fragment);
