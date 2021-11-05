import React from 'react';
import { Link } from 'react-router-dom';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div id="newsletter-section">
	<div className="container">
		<div className="newsletter row justify-content-between">
			<div className="col-12 col-sm-6text col-md-6 col-lg-4">
				<h3>Browse Tours</h3>
				<Link className="text" to="#">Outdoor Activites</Link>
				<Link className="text" to="#">Cultural & Thematic Tours</Link>
				<Link className="text" to="#">Family Friendly Tours</Link>
				<Link className="text" to="#">Relaxation Tours</Link>
				<Link className="text" to="#">City Tours</Link>
			</div>
			<div className="col-12 col-sm-6 col-md-6 col-lg-4">
				<h3><i className="fas fa-map-marker-alt"></i> Place</h3>
				<Link className="text" to="#">Polihale Beach, Hawaii, USA</Link>
				<Link className="text" to="#">Maya Bay, Koh Phi Phi</Link>
				<Link className="text" to="#">Tulum, Riviera Maya, Mexico</Link>
				<Link className="text" to="#">Grace Bay, Turks & Caicos</Link>
				<Link className="text" to="#">Anse Source d'Argent, Seychelles</Link>
			</div>
			<div className="col-12 col-sm-12 col-md-12 col-lg-4">
				<h3>Newsletter</h3>
				<p>Subscribe for updates & promotions</p>
				<div className="search-box-container">
					<input type="text" name=""/>
					<button>Subscribe</button>
				</div>
				<div className="social-icon icon">
					<Link to="#"><i className="fab fa-facebook-f nicon"></i></Link>
					<Link to="#"><i className="fab fa-twitter nicon"></i></Link>
					<Link to="#"><i className="fab fa-instagram nicon"></i></Link>
					<Link to="#"><i className="fab fa-linkedin-in nicon"></i></Link>
					<Link to="#"><i className="fab fa-google-plus-g nicon"></i></Link>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Newsletter;