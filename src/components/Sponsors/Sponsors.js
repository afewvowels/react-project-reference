import React, { Component } from 'react';
import './Sponsors.scss';

class Sponsors extends Component {
  render() {
    return(
      <section className='sponsors'>
        <p className='sponsors__description'>Maecenas vestibulum mollis diam. Pellentesque ut neque.</p>
        <article className='sponsors__list'>
          <div className='sponsors__list__item'>Vestibulum</div>
          <div className='sponsors__list__item'>Vestibulum</div>
          <div className='sponsors__list__item'>Vestibulum</div>
        </article>
        <article className='sponsors__list'>
          <div className='sponsors__list__item'>Vestibulum</div>
          <div className='sponsors__list__item'>Vestibulum</div>
          <div className='sponsors__list__item'>Vestibulum</div>
        </article>
      </section>
    );
  }
}

export default Sponsors;
