var React = require('react');
var ReactDOM = require('react-dom');
var Survey = require('./components/survey.js');

//import React from 'react';
//import ReactDOM from 'react-dom';

//import {Survey, LikertQuestion, SurveyImage, SurveyQuestions} from './components';
window.React = React;

/** A Single and simple! likert question */
var App = React.createClass({
  getInitialState: function() {
    return {
      results: null
    }
  },

  render: function() {
    console.log('App');
    return (
      <div className="">
        <Survey imageDirectory="images/" />
        <span>App</span>
      </div>
    );
  }
});

ReactDOM.render( <App />,
    document.getElementById('content')
);
