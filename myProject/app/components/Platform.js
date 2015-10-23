    /** @jsx React.DOM */
var React=require('react/addons');
var Header=require('./common/Header');
var Section=require('./platform/Section');
var Platform=React.createClass({
	render : function () {
		return (
			<div>
				<Header />
				<div className="section">
		  		<span className="map">首页／蜂控统计／平台统计</span>
		  		<h2>平台统计</h2>
		  		<Table data={DATA} category={CATEGORY}/>
			</div>
			</div>
		)
	}
});
module.exports=Platform;
var DATA=[
	    ['陆金所',50,14,9005,1001,451,4562,8000],
	    ['陆金所',50,14,9005,1001,451,4562,8000],
	    ['陆金所',50,14,9005,1001,451,4562,8000],
	    ['陆金所',50,14,9005,1001,451,4562,8000],
	    ['陆金所',50,14,9005,1001,451,4562,8000],
	    ['陆金所',50,14,9005,1001,451,4562,8000]];
var CATEGORY=['平台名称','总关注数','取消关注数',
				'前往查看（次）','基本信息（次）','风险等级（次）',
				'风险趋势（次）','股东关系（次）'];