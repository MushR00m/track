    /** @jsx React.DOM */
    var React=require('react/addons');
    var Input=React.createClass({
    	render : function (){
    		return (
    			<input type={this.props.type} className={this.props.className} placeholder={this.props.placeholder}/>
    		);
    	}
    });
    module.exports=Input;