import React, { Component } from 'react';
import './ScheduleItem.scss';

class ScheduleItem extends Component {
  render() {
    return (
      <section className='scheduleitem'>
        <div className='scheduleitem__wrapper'>
          <h3 className='scheduleitem__wrapper__h3'>{this.props.itemHeading}</h3>
          <p className='scheduleitem__wrapper__p'>{this.props.itemDescription}</p>
          <img className='scheduleitem__wrapper__img' src={this.props.itemImage} alt={this.props.itemImageAlt} />
        </div>
      </section>
    );
  }
}

export default ScheduleItem;
