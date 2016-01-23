var ScoreCollection = Backbone.Collection.extend({

  localStorage: new Backbone.LocalStorage("score-storage"), // Unique name within your app.

  model: ScoreModel
});
