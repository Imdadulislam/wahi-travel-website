import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';


const ManageAllBooking = () => {
    const [tourists, setTourists] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
        console.log(e.target.value);
    }


    useEffect(() => {
        fetch('https://wahi-travel-server.onrender.com/booking')
            .then(res => res.json())
            .then(data => setTourists(data))
    }, []);


    const handleUpdate = id => {
        fetch(`https://wahi-travel-server.onrender.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Approved Your Booking',)
                }

            });

    }



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to cancel Booking?');
        if (proceed) {
            fetch(`https://wahi-travel-server.onrender.com/cancelBooking/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted SuccessFully');
                        const remainingUsers = tourists.filter(cancelBooking => cancelBooking._id !== id);
                        setTourists(remainingUsers);
                    }

                });
        }
    }
    return (
        <div>
            <div className="py-5" style={{ background: '#e9f2fa' }}>
                <h2 className="text-info fw-bold">Manage All Booking</h2>
                {
                    tourists.map(tourist =>

                        <div className="card mb-3 mx-auto" style={{ maxWidth: "48rem" }} key={tourist?._id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={tourist?.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{tourist?.place}</h5>
                                        <p className="card-text"> Name:{tourist?.name}</p>
                                        <p className="card-text">Email: {tourist?.email}</p>
                                        <p className="card-text">Date: {tourist?.date}</p>
                                        <p className="card-text">Ticket Quantity: {tourist?.number}</p>
                                        <p className="card-text">Status: {tourist?.status}</p>


                                        <div className="d-flex justify-content-center gap-lg-4">
                                            <div>
                                                <input onChange={handleStatus} defaultValue={tourist?.status} className="py-lg-2 text-warning border-2  border-danger" type="text" />
                                                <button onClick={() => handleUpdate(tourist?._id)} className="py-lg-2 mb-lg-1 mx=lg-2 btn btn-warning border-warning  text-white">Submit</button>
                                            </div>


                                            <button onClick={() => handleDelete(tourist?._id)} className="btn btn-danger">Cancel Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>
            <Footer></Footer>
        </div>

    );
};

export default ManageAllBooking;