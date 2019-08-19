import React, { Component } from 'react';
import DetailItem from './DetailItem.js';
import './Details.scss';

import Identicon1 from './identicon1.png';
import Identicon2 from './identicon2.png';
import Identicon3 from './identicon3.png';
import Identicon4 from './identicon4.png';

class Details extends Component {
  render() {
    return (
      <section className='details'>
        <h3 className='details__h3'>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.</h3>
        <article className='details__items'>
          <DetailItem
            detailImage={Identicon1}
            detailImageAlt='Identicon hased from a word'
            detailTitle='Vestibulum purus'
            detailDescription='Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.'
          />
          <DetailItem
            detailImage={Identicon2}
            detailImageAlt='Identicon hased from a word'
            detailTitle='Phasellus consectetuer'
            detailDescription='Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.'
          />
          <DetailItem
            detailImage={Identicon3}
            detailImageAlt='Identicon hased from a word'
            detailTitle='Sed consequat leo'
            detailDescription='Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.'
          />
          <DetailItem
            detailImage={Identicon4}
            detailImageAlt='Identicon hased from a word'
            detailTitle='Integer ante arcu'
            detailDescription='Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.'
          />
        </article>
      </section>
    );
  }
}

export default Details;
