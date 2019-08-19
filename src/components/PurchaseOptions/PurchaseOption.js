import React, { Component } from 'react';
import './PurchaseOption.scss';

class PurchaseOption extends Component {
  setActiveAll = () => {
    return this.props.itemKey === this.props.activeKey ? 'option option--active' : 'option';
  }

  setActiveCost = () =>  {
    return this.props.itemKey === this.props.activeKey ? 'option__cost option__cost--active' : 'option__cost';
  }

  clicked = () => {
    this.props.clicked(this.props.itemKey);
  }

  render() {
    return (
      <article onClick={this.clicked} className={this.setActiveAll()} data-key={this.props.itemKey}>
        <h4 onClick={this.clicked} className='option__title'>{this.props.optionTitle}</h4>
        <p onClick={this.clicked} className={this.setActiveCost()}>{this.props.optionCost}</p>
        <p onClick={this.clicked} className='option__description'>{this.props.optionDescription}</p>
        <button onClick={this.clicked} className='option__button' type='button' value={this.props.optionButton}>{this.props.optionButton}</button>
      </article>
    );
  }
}

export default PurchaseOption;
