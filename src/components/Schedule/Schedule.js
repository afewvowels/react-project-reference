import React, { Component } from 'react';

import ScheduleItem from './ScheduleItem';
import './Schedule.scss';

import Icon1 from './icon1.png';

class Schedule extends Component {
  render() {
    return (
      <section className='schedule'>
        <h2 className='schedule__h2'>Ut non enim eleifend</h2>
        <p className='schedule__p'>Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem.</p>
        <div className='schedule__items'>
          <ScheduleItem
            itemHeading='12:00 - Lorem Ipsum'
            itemDescription='Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.'
            itemImage={Icon1}
            itemImageAlt='Lorem ipsum dolor est'
          />
          <ScheduleItem
            itemHeading='2:00 - Lorem Ipsum'
            itemDescription='Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.'
            itemImage={Icon1}
            itemImageAlt='Lorem ipsum dolor est'
          />
          <ScheduleItem
            itemHeading='3:30 - Lorem Ipsum'
            itemDescription='Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.'
            itemImage={Icon1}
            itemImageAlt='Lorem ipsum dolor est'
          />
          <ScheduleItem
            itemHeading='5:00 - Lorem Ipsum'
            itemDescription='Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.'
            itemImage={Icon1}
            itemImageAlt='Lorem ipsum dolor est'
          />
          <ScheduleItem
            itemHeading='7:30 - Lorem Ipsum'
            itemDescription='Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.'
            itemImage={Icon1}
            itemImageAlt='Lorem ipsum dolor est'
          />
          <ScheduleItem
            itemHeading='9:00 - Lorem Ipsum'
            itemDescription='Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.'
            itemImage={Icon1}
            itemImageAlt='Lorem ipsum dolor est'
          />
        </div>
      </section>
    );
  }
}

export default Schedule;
