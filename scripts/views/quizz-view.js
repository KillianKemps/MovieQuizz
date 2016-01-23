var QuizzListView = Backbone.View.extend({
  el: '#app',

  events: {
    'submit form': 'validateMovie',
  },

  templateHandlebars: Handlebars.compile(
    $('#play-template-handlebars').html()
  ),

  remove: function() {
    this.$el.empty();

    return this;
  },

  reset: function() {
    this.step = 0;
    this.quizzList = this.shuffleArray(this.quizzList);
  },

  shuffleArray: function (o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  },

  validateMovie: function(event) {
    // Kill submit event
    event.preventDefault();
    var $form = $(event.currentTarget);
    var answer = $form.find('input:radio[name=answer]:checked').val();
    var isActorPresent = this.quizzList[this.step].actor.isPresent;

    if((isActorPresent && answer === 'yes') || !isActorPresent && answer === 'no'){
      this.stepCounter();
      this.render();
    } else {
      var score = new ScoreModel({
        value: this.step
      });

      this.myScoreCollection.add(score);
      score.save();

      Router.navigate('#gameOver', { trigger: true });

    }
  },

  stepCounter: function() {
    this.step += 1;
  },

  initialize: function() {
    console.log('Initialize in quizz view');
    this.myQuizzCollection = new QuizzCollection();
    this.myScoreCollection = new ScoreCollection();
    this.step = 0;

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
      this.templateHandlebars(this.quizzList[this.step])
    );
  }
});
