var React = require('react/addons'),
Index = React.createFactory(require('../components/Index'));

module.exports = function(app) {
    /*  app.get('/contact', function(req, res){
        // React.renderToString takes your component
          // and generates the markup
        var reactHtml = React.renderToString(Contact({}));
          // Output html rendered by react
        // console.log(myAppHtml);
          res.render('contact.ejs', {reactOutput: reactHtml});
      });*/

	app.get('/', function(req, res){
		// React.renderToString takes your component
	    // and generates the markup
		var reactHtml = React.renderToString(Index({}));
	    // Output html rendered by react
		// console.log(myAppHtml);
	    res.render('index.ejs', {reactOutput: reactHtml});
	});



};
