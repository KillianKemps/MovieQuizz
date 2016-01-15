var QuizzListView = Backbone.View.extend({
  el: '#app',

  templateHandlebars: Handlebars.compile(
    $('#template-handlebars').html()
  ),

  initialize: function() {
    this.myQuizzCollection = new QuizzCollection();
    this.myQuizzCollection.fetch();
    console.log('$$$$$$$');
    this.render();
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
