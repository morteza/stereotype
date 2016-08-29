var React = require("react");

/** A Single image to be rated by the subject */
var SurveyImage = React.createClass({
  getInitialState: function() {
    return {
      title: null,
      imageId: 0,
      randomized: null
    }
  },

  render: function() {
    var imgSrc = "/img/survey/" + this.props.title + ".png";
    return (
      <img src={imgSrc} />
    );
  },

  handleImageChange: function(event) {

  }

});

module.exports = SurveyImage;
