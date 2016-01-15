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
        console.log(data);
        self.render();
      },
      error: function(error) {
        console.log('error: ', error);
      }
    });
    console.log('$$$$$$$');
  },

  render: function() {
    var $renderContainer = this.$('.question-area');
    console.log($renderContainer);

    $renderContainer.html(
      this.templateHandlebars(this.myQuizzCollection.toJSON())
    );
    console.log(this.myQuizzCollection.toJSON());
  }
});
