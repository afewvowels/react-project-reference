import React, { Component } from 'react';
import './Question.scss';

class Question extends Component {
  render() {
    return (
      <div className='question'>
        <p className='question__question'>{this.props.question}</p>
        <p className='question__answer'>{this.props.answer}</p>
      </div>
    );
  }
}

export default Question;
