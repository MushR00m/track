    /** @jsx React.DOM */
var React=require('react/addons');
var Table=require('../common/Table');
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
		  		<Table />
			</div>
		)
	}
});
module.exports=Section;