/** @jsx React.DOM */

var React = require('react/addons');
var OtherStatics = require('../components/OtherStatics');

var mountNode = document.getElementById("react-main-mount");

React.render(new OtherStatics({}), mountNode);