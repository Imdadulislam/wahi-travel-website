import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.css';

const Offer = () => {
    return (
        <section id="offer-section">
            <div className="container">
                <div className="offer-section">
                    <div>
                        <h1>Discount 20% to 50%</h1>
                        <p>Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                        <Link className="offer-button" to="#">See more</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;