import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div id="banner">
	<div className="container">
		<div className="banner">
			<div className="banner-content">
				<h1>Travel</h1>
				<p>Here are my favorite travel and adventure quotes, paired with images from my journeys around the world.</p>
				<Link className="button" to="#">Read more</Link>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Banner;