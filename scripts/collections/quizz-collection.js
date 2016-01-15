var QuizzCollection = Backbone.Collection.extend({
  model: QuizzModel,
  url: './data/quizz.json'
});
