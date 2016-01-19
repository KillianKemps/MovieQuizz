var QuizzListView = Backbone.View.extend({
  el: '#app',

  templateHandlebars: Handlebars.compile(
    $('#play-template-handlebars').html()
  ),

  remove: function() {
    this.$el.empty();

    return this;
  },

  shuffleArray: function (o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  },

  initialize: function() {
    console.log('Initialize in quizz view');
    this.myQuizzCollection = new QuizzCollection();

    var self = this;

    this.myQuizzCollection.fetch({
      success: function(data) {
        // Shuffle the data and store it
        self.quizzList = self.shuffleArray(self.myQuizzCollection.toJSON());
        self.render();
      },
      error: function(error) {
        console.log('Error while fetching quizz: ', error);
      }
    });

  },

  render: function() {
    this.$el.html(
      this.templateHandlebars(this.quizzList)
    );
  }
});
