import React, { Component } from 'react';
import './Speaker.scss';
/**
 * Creates a speaker card with a speaker's Picture, Name, Job Title, and Description
 *
 * @version 1.0
 * @author [Keith Smith](https://www.github.com/afewvowels)
 */
class Speaker extends Component {
  render() {
    return (
      /**
       * Main wrapper for speaker card
       *
       * @since Version 1.0
       */
      <article className='speaker'>
        <img
          className='speaker__image'
          src={this.props.speakerImage ? this.props.speakerImage : null}
          alt={this.props.speakerImageAlt}
        />
        <div className='speaker__textwrapper'>
          <h2 className='speaker__textwrapper__h2'>{this.props.speakerName}</h2>
          <h3 className='speaker__textwrapper__h3'>{this.props.speakerJob}</h3>
          <p className='speaker__textwrapper__p'>{this.props.speakerDescription}</p>
        </div>
      </article>
    );
  }
}

export default Speaker;
