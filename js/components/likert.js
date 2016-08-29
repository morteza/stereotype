var React = require("react");

/** A Single and simple! likert question */
var LikertQuestion = React.createClass({
  getInitialState: function() {
    return {
      title: null,
      question: null,
      description: null,
      steps: 7,
      minLabel: null,
      midLabel: null,
      maxLabel: null
    }
  },

  render: function() {
    var steps = this.props.steps;
    return (
      <div className="">
        <input type="number" value=1 min=1 max={steps} />
        of {steps}
      </div>
    );
  }
});

module.exports = LikertQuestion;
