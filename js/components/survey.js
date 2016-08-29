var React = require("react");

/** A survey, includes several questions (likerts for now) */
var Survey = React.createClass({
  getInitialState: function() {
    return {
      title: null,
      description: null
    }
  },

  render: function() {
    return (
      <div className="">
        Survey!
      </div>
    );
  }
});

module.exports = Survey;
