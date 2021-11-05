import React from 'react';
import ChooseUs from '../../Choose Us/ChooseUs';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Newsletter from '../../Newsletter/Newsletter';
import Offer from '../../Offer/Offer';
import Footer from '../../../Footer/Footer';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Newsletter></Newsletter>
            <Offer></Offer>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;