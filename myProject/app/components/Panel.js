    /** @jsx React.DOM */
var React=require('react/addons');
var Header=require('./common/Header');
var Panel=React.createClass({
	render : function (){
		return (
			<div>
				<Header />
				<div className="section">
					<div className="map">首页／</div>
					<div className="inputs">
						<a>橙信统计</a>
						<a>蜂控统计</a>
					</div>
				</div>
			</div>
		)
	}
});
module.exports=Panel;