import React, { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";
import Footer from '../../Footer/Footer';

const MyBooking = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`https://wahi-travel-server.onrender.com/booking/${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure want to cancel Booking?');
        if (proceed) {
            fetch(`https://wahi-travel-server.onrender.com/cancelBooking/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted SuccessFully');
                        const remainingUsers = bookings.filter(cancelBooking => cancelBooking._id !== id);
                        setBookings(remainingUsers);
                    }

                });
        }
        console.log(id);
    }
    return (
        <div>
            <div className="py-5" style={{ background: '#e9f2fa' }}>
                <h2 className="text-secondary">My Bookings</h2> <hr className="w-25 mx-auto" />
                {
                    bookings?.map(booking =>

                        <div className="card mb-3 mx-auto" style={{ maxWidth: "48rem" }} key={booking?._id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={booking?.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">

                                    <div className="card-body">
                                        <h5 className="card-title text-info fs-4">{booking?.place}</h5>
                                        <p className="card-text text-secondary fs-5">Name: {booking?.name}</p>
                                        <p className="card-text text-secondary">Email: {booking?.email}</p>
                                        <p className="card-text text-secondary">Booking Code: {booking?._id}</p>
                                        <p className="card-text text-secondary">Status: {booking?.status}</p>
                                        <div >
                                            <button onClick={() => handleDelete(booking?._id)} className="btn btn-danger px-5">Cancel Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <Footer></Footer>
        </div >

    );
};

export default MyBooking;