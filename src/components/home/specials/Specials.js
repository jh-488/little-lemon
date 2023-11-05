import React from 'react';
import "./Specials.css";
import { specials } from '../../data/Data';
import Card from '../../card/Card';

const Specials = () => {
  return (
    <>
      <section className='specials'>
        <div className='container'>
            <div className='grid2 mtop'>
              <h1>This weeks specials!</h1>
              <button>Online Menu</button>
            </div>
            <Card items={specials}/>
        </div>
      </section>
    </>
  )
}

export default Specials
