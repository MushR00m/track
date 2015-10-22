    /** @jsx React.DOM */
var React=require('react/addons');
var Index=React.createClass({
          render : function (){
                return (
                  <div>
                      index page!
                  </div>
                )
          }
});
/* Module.exports instead of normal dom mounting */
module.exports=Index;