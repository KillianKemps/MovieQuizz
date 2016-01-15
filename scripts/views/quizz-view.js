var QuizzListView = Backbone.View.extend({
  el: '#app',

  templateHandlebars: Handlebars.compile(
    $('#template-handlebars').html()
  ),

  initialize: function() {
    this.myQuizzCollection = new QuizzCollection();
    var self = this;
    this.myQuizzCollection.fetch({
      success: function(data) {
        self.render();
      },
      error: function(error) {
        console.log('error: ', error);
      }
    });
  },

  render: function() {
    var $renderContainer = this.$('.question-area');

    $renderContainer.html(
      this.templateHandlebars(this.myQuizzCollection.toJSON())
    );
  }
});
