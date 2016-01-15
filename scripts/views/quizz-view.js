var QuizzListView = Backbone.View.extend({
  el: '#app',

  templateHandlebars: Handlebars.compile(
    $('#template-handlebars').html()
  ),

  initialize: function() {
    this.myquizzCollection = new QuizzCollection();
    this.render();
  },

  render: function() {
    var $renderContainer = this.$('.movie-list');

    $renderContainer.html(
      this.templateHandlebars(this.myquizzCollection.toJSON())
    );
  }
});
