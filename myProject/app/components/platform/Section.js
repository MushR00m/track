    /** @jsx React.DOM */
var React=require('react/addons');
var Section=React.createClass({
	render : function (){
		var dataRows=[];
		this.props.data.forEach(function(row){
			var items=[]
			row.forEach(function(item){
				items.push(<td>{item}</td>);
			});	
			dataRows.push(<tr>{items}</tr>);
		});
		return (
			<div className="section">
		  		<span className="map">首页／蜂控统计／平台统计</span>
		  		<h2>平台统计</h2>
		  		<table className="data-table">
		  			<thead>
		  				<tr>
		  					<th>平台名称</th>
		  					<th>总关注数</th>
		  					<th>取消关注数</th>
		  					<th>前往查看（次）</th>
		  					<th>基本信息（次）</th>
		  					<th>风险等级（次）</th>
		  					<th>风险趋势（次）</th>
		  					<th>股东关系（次）</th>
		  				</tr>
		  			</thead>
		  			<tbody>
		  				{dataRows}
		  			</tbody>
		  		</table>
			</div>
		)
	}
});
module.exports=Section;