    /** @jsx React.DOM */
var React=require('react/addons');
var Header=React.createClass({
	render :function (){
		return (
			<div className="header-wrap">
			       <div className="header">
					<a herf="#" className="logo"><img src="./images/logo.png" alt=""/></a>
					<ul className="nav">
						<li><a herf="#">首页</a></li>
						<li><a herf="#">蜂控统计</a></li>
						<li><a herf="#">橙信统计</a></li>
					</ul>
					<ul className="aside-nav">
						<li><a herf="#">ADMIN</a></li>
						<li><a herf="#">登出</a></li>
					</ul>
				</div>
			</div>
		);
	}
});
module.exports=Header;