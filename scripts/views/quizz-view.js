var QuizzListView = Backbone.View.extend({
  el: '#app',

  templateHandlebars: Handlebars.compile(
    $('#play-template-handlebars').html()
  ),

  remove: function() {
    this.$el.empty();

    return this;
  },

  initialize: function() {
    console.log('Initialize in quizz view');
    this.myQuizzCollection = new QuizzCollection();

    var self = this;

    this.myQuizzCollection.fetch({
      success: function(data) {
        self.render();
      },
      error: function(error) {
        console.log('Error while fetching quizz: ', error);
      }
    });
  },

  render: function() {
    this.$el.html(
      this.templateHandlebars(this.myQuizzCollection.toJSON())
    );
  }
});
