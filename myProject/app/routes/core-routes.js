var React = require('react/addons'),
Index = React.createFactory(require('../components/Index')),
Platform=React.createFactory(require('../components/Platform')),
OtherStatics=React.createFactory(require('../components/OtherStatics')),
Login=React.createFactory(require('../components/Login')),
Panel=React.createFactory(require('../components/Panel'));
module.exports = function(app) {
      app.get('/platform', function(req, res){
        // React.renderToString takes your component
          // and generates the markup
        var reactHtml = React.renderToString(Platform({}));
          // Output html rendered by react
        // console.log(myAppHtml);
          res.render('platform.ejs', {reactOutput: reactHtml});
      });
      app.get('/otherstatics', function(req, res){
        // React.renderToString takes your component
          // and generates the markup
        var reactHtml = React.renderToString(OtherStatics({}));
          // Output html rendered by react
        // console.log(myAppHtml);
          res.render('otherstatics.ejs', {reactOutput: reactHtml});
      });
       app.get('/login', function(req, res){
        // React.renderToString takes your component
          // and generates the markup
        var reactHtml = React.renderToString(Login({}));
          // Output html rendered by react
        // console.log(myAppHtml);
          res.render('login.ejs', {reactOutput: reactHtml});
      });
        app.get('/panel', function(req, res){
        // React.renderToString takes your component
          // and generates the markup
        var reactHtml = React.renderToString(Panel({}));
          // Output html rendered by react
        // console.log(myAppHtml);
          res.render('panel.ejs', {reactOutput: reactHtml});
      });

	app.get('/', function(req, res){
		// React.renderToString takes your component
	    // and generates the markup
		var reactHtml = React.renderToString(Index({}));
	    // Output html rendered by react
		// console.log(myAppHtml);
	    res.render('index.ejs', {reactOutput: reactHtml});
	});



};
