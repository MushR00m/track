    /** @jsx React.DOM */
    var React=require('react/addons');
    var Table=React.createClass({
    	render : function (){
    		var categoryArray=[];
    		var dataRows=[];
    		this.props.categorys.forEach(function(category){
    			categoryArray.push(<th>{category}</th>);
    		});
    		this.props.data.forEach(function(row){
    			var items=[]
    			row.forEach(function(item){
    				items.push(<td>{item}</td>);
    			});	
    			dataRows.push(<tr>{items}</tr>);
    		});
    		return(
    			<table>
    				<thead>
    					<td></td>
    				</thead>
    				<tbody>
    					{dataRows}
    				</tbody>
    			</table>
    			);
    	}
    })
    module.exports=Table;