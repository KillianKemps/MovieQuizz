var QuizzCollection = Backbone.Collection.extend({
  model: QuizzModel,
  url: 'http://dcamilleri.com/wsf/api'
});
