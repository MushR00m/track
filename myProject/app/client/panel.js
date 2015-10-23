/** @jsx React.DOM */

var React = require('react/addons');
var Panel = require('../components/Panel');

var mountNode = document.getElementById("react-main-mount");

React.render(new Panel({}), mountNode);