var HomeView = Backbone.View.extend({
  el: '#app',

  templateHandlebars: Handlebars.compile(
    $('#home-template-handlebars').html()
  ),
  remove: function() {
    $(this.el).empty();

    return this;
  },

  initialize: function() {
    this.myScoreCollection = new ScoreCollection();

    var score = new ScoreModel();

    this.myScoreCollection.add(score);
    score.save();

    this.render();
  },

  render: function() {
    this.$el.html(
      this.templateHandlebars()
    );
  }
});
