var GameOverView = Backbone.View.extend({
  el: '#app',

  templateHandlebars: Handlebars.compile(
    $('#game-over-template-handlebars').html()
  ),
  remove: function() {
    $(this.el).empty();

    return this;
  },

  initialize: function() {
    this.myScoreCollection = new ScoreCollection();
    this.myScoreCollection.fetch();
    this.score = this.myScoreCollection.toJSON();
    this.score = this.score[this.score.length - 1];
    this.render();
  },

  render: function() {
    this.$el.html(
      this.templateHandlebars(this.score)
    );
  }
});
