    /** @jsx React.DOM */
    var React=require('react/addons');
    var Header=require('./common/Header');
    var Input=require('./login/Input');
    var Login=React.createClass({
    	render : function (){
    		return (
    			<form className="loginForm" onSubmit={this.handleSubmit}>
    				<img src="./images/logo.png"/>
    				<h1>统计系统</h1>
    				<Input type="text" className="userName" placeholder="用户名"/>
    				<p>{this.state.mess[0]}</p>
    				<Input type="password" className="userPass" placeholder="密码"/>
    				<p>{this.state.mess[1]}</p>
    				<input type="submit" className="submit" value="登录"/>
    			</form>
    			);
    	}
    });
    module.exports=Login;