import React from 'react';
import big from '../../../images/choose/big.jpg';
import first from '../../../images/choose/first.jpg';
import second from '../../../images/choose/second.jpg';
import './ChooseUs.css';


const ChooseUs = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <h1>Why Choose Us</h1>
                    <h6><em>The gladdest moment in human life, me thinks, is a departure into unknown lands.</em></h6>
                    <div className="main col-12 col-md-6">
                        <img src={big} alt="" />
                    </div>
                    <div className="row justify-content-center col-12 col-md-6">
                        <div className="box col-10 col-sm-6">
                            <img src={first} alt="" />
                        </div>
                        <div className="box col-10 col-sm-6">
                            <div className="about-box">
                                <h2><i className="fas fa-globe-americas"></i></h2>
                                <h5>Passionate Travel</h5>
                                <sm><em>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia.</em></sm>
                            </div>
                        </div>

                        <div className="box col-10 col-sm-6">
                            <div className="about-box">
                                <h2><i className="fas fa-map-marked-alt"></i></h2>
                                <h5>Beautiful Place</h5>
                                <sm><em>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia.</em></sm>
                            </div>
                        </div>

                        <div className="box col-10 col-sm-6">
                            <img src={second} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ChooseUs;