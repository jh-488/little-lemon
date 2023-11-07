import React from 'react';
import './Reservation.css';
import Heading from '../heading/Heading';
import BookingForm from './BookingForm';


const Reservation = (props) => {
  return (
    <>
      <section className='reservation'>
        <Heading 
            title="Reserve a Table"
            subtitle="Make a reservation online, easy and simple."
            image="/assets/restaurant.jpg"
        />
        <div className='container mtop'>
            <BookingForm availableTimes={props.availableTimes} submitForm={props.submitForm}/>
        </div>
      </section>
    </>
  )
}

export default Reservation
