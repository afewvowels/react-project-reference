import React, { Component } from 'react';

import PurchaseOption from './PurchaseOption';
import './PurchaseOptions.scss';

class PurchaseOptions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      cardActive : '2'
    };
  }

  handleClick(cardKey) {
    if(cardKey !== this.state.cardActive) {
      this.setState({ cardActive: cardKey });
    }
  }

  render() {
    return (
      <section className='purchaseoptions'>
        <h2 className='purchaseoptions__h2'>Etiam sit amet orci</h2>
        <p className='purchaseoptions__p'>Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <div className='purchaseoptions__items'>
          <PurchaseOption
            optionTitle='Lorem ipsum'
            optionCost='33'
            optionDescription='Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.'
            optionButton='Purchase Now'
            itemKey='1'
            activeKey={this.state.cardActive}
            clicked={this.handleClick}
          />
          <PurchaseOption
            optionTitle='Lorem ipsum'
            optionCost='66'
            optionDescription='Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.'
            optionButton='Purchase Now'
            itemKey='2'
            activeKey={this.state.cardActive}
            clicked={this.handleClick}
          />
          <PurchaseOption
            optionTitle='Lorem ipsum'
            optionCost='99'
            optionDescription='Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.'
            optionButton='Purchase Now'
            itemKey='3'
            activeKey={this.state.cardActive}
            clicked={this.handleClick}
          />
        </div>
      </section>
    );
  }
}

export default PurchaseOptions;
