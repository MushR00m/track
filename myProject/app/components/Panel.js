    /** @jsx React.DOM */
var React=require('react/addons');
var Header=require('./common/Header');
var Panel=React.createClass({
	render : function (){
		return (
			<div>
				<Header />
			</div>
		)
	}
});
module.exports=Panel;