import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/banner/notfound.png'

const Notfound = () => {
    return (
        <div className="d-flex flex-column">
            <img className="w-50 mx-auto" src={img} alt="" />
            <Link to="/">
                <button className="btn btn-danger px-5">Go Back</button>
            </Link>
        </div>
    );
};

export default Notfound;