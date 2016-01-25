var HomeView = Backbone.View.extend({
  el: '#app',

  events: {
    'click a#playBtn': 'getPseudo',
  },

  templateHandlebars: Handlebars.compile(
    $('#home-template-handlebars').html()
  ),
  remove: function() {
    $(this.el).empty();

    return this;
  },

  getPseudo: function (event) {
    event.preventDefault();
    var pseudo = $("input").val();
    if (pseudo === "") {
      pseudo = "anon";
    }
    var score = new ScoreModel ({
      pseudo: pseudo
    });
    this.myScoreCollection.add(score);
    score.save();
    Router.navigate('#play', { trigger: true });
  },

  initialize: function() {
    this.myScoreCollection = new ScoreCollection();

    this.render();
  },

  render: function() {
    this.$el.html(
      this.templateHandlebars()
    );
  }
});
