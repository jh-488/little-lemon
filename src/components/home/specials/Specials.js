import React from 'react';
import "./Specials.css";
import SpecialsCard from './SpecialsCard';

const Specials = () => {
  return (
    <>
      <section className='specials'>
        <div className='container'>
            <div className='grid2 mtop'>
              <h1>This weeks specials!</h1>
              <button>Online Menu</button>
            </div>
            <SpecialsCard />
        </div>
      </section>
    </>
  )
}

export default Specials
