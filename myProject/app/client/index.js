    /** @jsx React.DOM */

var React = require('react/addons');
var Index = require('../components/Index');

var mountNode = document.getElementById("react-main-mount");

React.render(new Index({}), mountNode);
