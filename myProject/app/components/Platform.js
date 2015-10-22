    /** @jsx React.DOM */
var React=require('react/addons');
var Header=require('./common/Header');
var Section=require('./platform/Section');
var Platform=React.createClass({
	render : function () {
		return (
			<div>
				<Header />
				<Section data={DATA}/>
			</div>
		)
	}
});
module.exports=Platform;
var DATA=[
	    ['陆金所',50,14,9005,1001,451,4562,8000],
	    ['陆金所',50,14,9005,1001,451,4562,8000],
	    ['陆金所',50,14,9005,1001,451,4562,8000],
	    ['陆金所',50,14,9005,1001,451,4562,8000]];