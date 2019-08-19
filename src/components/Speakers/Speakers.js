import React, { Component } from 'react';
import Speaker from './Speaker.js';
import './Speakers.scss';

// Speaker images
import Speaker1 from './speaker1.jpg';
import Speaker2 from './speaker2.jpg';
import Speaker3 from './speaker3.jpg';

class Speakers extends Component {
  render() {
    return (
      <section className='speakers'>
        <div className='speakers__headings'>
          <h2 className='speakers__headings__h2 animated fadeInLeft'>Lorem Ipsum</h2>
          <p className='speakers__headings__p animated fadeIn delay-1s'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis</p>
        </div>
        <article className='speakers__cards animated fadeInUp'>
          <Speaker
            speakerImage={Speaker1}
            speakerImageAlt='heroic image of speaker 1'
            speakerName='Lori Jane'
            speakerJob='Digital Guru'
            speakerDescription='Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.'
          />
          <Speaker
            speakerImage={Speaker2}
            speakerImageAlt='heroic image of speaker 2'
            speakerName='Georgia Doe'
            speakerJob='Social Media Ninja'
            speakerDescription='Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
          />
          <Speaker
            speakerImage={Speaker3}
            speakerImageAlt='heroic image of speaker 3'
            speakerName='Sven Svenson'
            speakerJob='Agile Project Lead'
            speakerDescription='Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
          />
        </article>
      </section>
    );
  }
}

export default Speakers;
