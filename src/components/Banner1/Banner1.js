import React, { Component } from 'react';
import './Banner1.scss';

class Banner1 extends Component {
  render() {
    return(
      <aside className='banner1'>
        <img className='banner1__image' src={this.props.bannerImage} alt={this.props.bannerImageAlt} />
        <div className='banner1__text'>
          <h3 className='banner1__text__h3'>{this.props.bannerTitle}</h3>
          <p className='banner1__text__subtitle'>{this.props.bannerSubtitle}</p>
          <p className='banner1__text__description'>{this.props.bannerDescription}</p>
        </div>
        <div className='banner1__background'></div>
      </aside>
    );
  }
}

export default Banner1;
