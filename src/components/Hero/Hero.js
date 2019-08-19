import React, { Component } from 'react';
import HeroBG from './hero-bg.jpg';
import './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <section className='hero'>
        <article className='hero__content'>
          <aside className='hero__content__left'>
            <div className='hero__content__left__tagline'>
              <h1>
                <small>Lorem ipsum dolor sit amet</small>
                Donec quam felis ultricies
              </h1>
            </div>
          </aside>
          <aside className='hero__content__right'>
            <div className='hero__content__right__wrapper'>
              <h3>Lorem ipsum</h3>
              <p>Nullam dictum felis <span className='hero__content__right__wrapper__formhighlight'>eu pede mollis pretium</span>. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
              <form>
                <input type='text' name='personName' />
                <input type='email' name='personEmail' />
                <input type='submit' value='Sign Up Now' />
              </form>
              <small>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</small>
            </div>
          </aside>
          <div className='hero__bg'>
            <img src={HeroBG} alt='long-exposure of night sky with rotation' />
          </div>
        </article>
      </section>
    );
  }
}

export default Hero;
