import React, { Component } from 'react';

import './Main.min.css';
import Hero from '../Hero/Hero';
import Speakers from '../Speakers/Speakers';
import Details from '../Details/Details';
import Map from '../Map/Map';
import Schedule from '../Schedule/Schedule';
import Banner1 from '../Banner1/Banner1';
import PurchaseOptions from '../PurchaseOptions/PurchaseOptions';
import Sponsors from '../Sponsors/Sponsors';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';

import Banner1Image from '../Banner1/banner1.png';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Hero />
        <Speakers />
        <Details />
        <Map />
        <Schedule />
        <Banner1
          bannerImage={Banner1Image}
          bannerImageAlt='Lorem ipsum dolor est'
          bannerTitle='Lorem Ipsum'
          bannerSubtitle='Vestibulum purus quam.'
          bannerDescription='Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere.'
        />
        <PurchaseOptions />
        <Sponsors />
        <Faq />
        <Footer />
      </div>
    );
  }
}

export default App;
