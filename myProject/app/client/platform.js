/** @jsx React.DOM */

var React = require('react/addons');
var Platform = require('../components/Platform');

var mountNode = document.getElementById("react-main-mount");

React.render(new Platform({}), mountNode);