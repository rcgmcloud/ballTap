Router.configure({
  layoutTemplate: "layout"
});


Router.route('/', function () {
  this.render('ballTapTest');
});