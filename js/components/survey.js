'use strict';

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
      <div className="survey">
        <SurveyQuestions />
        <SurveyImage />
      </div>
    );
  }
});

module.exports = Survey;
