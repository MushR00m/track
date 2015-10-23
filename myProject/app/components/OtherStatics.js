    /** @jsx React.DOM */
var React=require('react/addons');
var Header=require('./common/Header');
var Table=require('./common/Table');
var OtherStatics=React.createClass({
	render : function (){
		return (
			<div>
				<Header />
				<div className="section">
		  			<div className="map">首页／蜂控统计／平台统计</div>
		  			<div  className="table-wrap">
		  				<h2>筛选统计</h2>
		  				<Table data={DATA1} categorys={CATEGORY1} />
		  			</div>
		  			<div className="table-wrap">
		  				<h2>头部导航</h2>
		  				<Table data={DATA2} categorys={CATEGORY1} />
		  			</div>
		  			<div className="table-wrap">
		  				<h2>意见反馈</h2>
		  				<Table data={DATA3} categorys={CATEGORY1} />
		  			</div>
		  			<div className="table-wrap">
		  				<h2>页码</h2>
		  				<Table data={DATA4} categorys={CATEGORY1} />
		  			</div>
		  		</div>
			</div>
		);
	}
});
/**/
var DATA1=[['年化收益',50],
			['年化收益',50]];
var DATA2=[['用户名',50],
			['用户名',50]];
var DATA3=[['点击意见反馈',50],
			['提交意见反馈',10]];
var DATA4=	[[1,50],[2,10],[1,50],[1,50],[1,50]];		
var CATEGORY1=['筛选名称','点击次数'];
module.exports=OtherStatics;