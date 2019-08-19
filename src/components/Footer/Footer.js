import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <section className='footer__upper'>
          <div className='footer__upper__about'>
            <h5 className='footer__upper__about__heading'>About</h5>
            <p className='footer__upper__about__paragraph'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.</p>
          </div>
          <div className='footer__upper__support'>
            <h5 className='footer__upper__support__heading'>Support</h5>
            <ul className='footer__upper__support__list'>
              <li className='footer__upper__support__list__item'><a href='#'>Customer Support</a></li>
              <li className='footer__upper__support__list__item'><a href='#'>Frequently Asked Questions (FAQ)</a></li>
              <li className='footer__upper__support__list__item'><a href='#'>Contact</a></li>
            </ul>
          </div>
          <div className='footer__upper__info'>
            <h5 className='footer__upper__info__heading'>Info</h5>
            <p className='footer__upper__info__paragraph'>Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.</p>
          </div>
          <div className='footer__upper__background'></div>
        </section>
        <section className='footer__lower'>
          <p className='footer__lower__copyright'>&copy;2019 Copyright, all rights reserved. Dymic Digital.</p>
          <div className='footer__lower__social'></div>
          <div className='footer__lower__background'></div>
        </section>
      </footer>
    );
  }
}
export default Footer;
