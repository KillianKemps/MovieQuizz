var HomeView = Backbone.View.extend({
  el: '#app',

  templateHandlebars: Handlebars.compile(
    $('#template-handlebars').html()
  ),

  remove: function() {
    $(this.el).empty();

    return this;
  },

  initialize: function() {
    console.log('In view home');
  },

  render: function() {
  }
});
