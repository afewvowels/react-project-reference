import React, { Component } from 'react';
import './Map.scss';

class Map extends Component {
  render() {
    return (
      <section className='map'>
        <div className='map__wrapper'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.2794869286145!2d-118.88280471784503!3d34.184613902263045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e83aa2925a1507%3A0xf049061c3ff29ff5!2s515+Marin+St%2C+Thousand+Oaks%2C+CA+91360!5e0!3m2!1sen!2sus!4v1563907041016!5m2!1sen!2sus" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
    );
  }
}

export default Map;
