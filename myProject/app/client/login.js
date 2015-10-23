    /** @jsx React.DOM */

var React = require('react/addons');
var Login = require('../components/Login');

var mountNode = document.getElementById("react-main-mount");

React.render(new Login({}), mountNode);