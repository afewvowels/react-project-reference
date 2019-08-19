import React, { Component } from 'react';
import './DetailItem.scss';

class DetailItem extends Component {
  render() {
    return (
      <article className='detailitem'>
        <img
          className='detailitem__image'
          src={this.props.detailImage}
          alt={this.props.detailImageAlt}
        />
        <div className='detailitem__text'>
          <h3 className='detailitem__text__h3'>{this.props.detailTitle}</h3>
          <p className='detailitem__text__p'>{this.props.detailDescription}</p>
        </div>
      </article>
    );
  }
}

export default DetailItem;
