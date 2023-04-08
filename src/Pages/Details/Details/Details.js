import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hook/useAuth';
import Footer from '../../Footer/Footer';
import './Details.css'

const Details = () => {
    const { serviceId } = useParams();
    const [place, setPlace] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://wahi-travel-server.onrender.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [place]);
    const onSubmit = data => {
        data.status = "Pending";
        fetch('https://wahi-travel-server.onrender.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Ticket booked Successfull');
                    reset();
                }
            })
    }
    return (
        <div className="body">
            <div className="booking-container">
                <div className="d-lg-flex">
                    <Card className="mx-auto mb-5 details-card">
                        <Card.Img variant="top" src={place.image} />
                        <Card.Body>
                            <Card.Title>
                                Booking {place.name} Tour
                            </Card.Title>
                            <h5>Price: ${place.price}</h5>
                            <Card.Text>
                                {place.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <form className="booking-form mb-5" onSubmit={handleSubmit(onSubmit)}>

                        <h3>Make Your Reservation</h3>

                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <input defaultValue={place.name} {...register("place", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input defaultValue={place.image} {...register("image")} />
                        <input
                            type="date"{...register("date", { valueAsDate: true, })} />
                        <input placeholder="Phone" defaultValue="" {...register("Phone")} />
                        <input placeholder="Ticket Quentity" defaultValue="" {...register("number")} />
                        <textarea placeholder="Descrive" defaultValue="" {...register("Description")} />

                        <input className="booked-button" type="submit" />
                    </form>
                </div>

                <Footer></Footer>
            </div>
        </div>

    );

};

export default Details;