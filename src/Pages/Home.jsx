import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Bbanner from '../Components/Bbanner';
import According from '../Components/According';
import Footer from '../Components/Footer';
import Footers from '../Components/Footers';
import Testimonial from '../Components/Testimonial';
import Services from '../Components/Services';
import WhoWeAre from '../Components/WhoWeAre';
import Care from '../Components/Care';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Care></Care>
      <WhoWeAre></WhoWeAre>
      <Services></Services>
      <Testimonial></Testimonial>
      <According></According>
      <Bbanner></Bbanner>
      <Footers></Footers>
    </div>
  );
};

export default Home;
