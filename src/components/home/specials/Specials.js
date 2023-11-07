import React from 'react';
import "./Specials.css";
import { specials } from '../../data/Data';
import Card from '../../card/Card';
import { useNavigate } from 'react-router-dom';

const Specials = () => {
  const navigate = useNavigate();

  const navigateToMenuPage = () => {
    navigate("/menu")
  };

  return (
    <>
      <section className='specials'>
        <div className='container'>
            <div className='grid2 mtop'>
              <h1>This weeks specials!</h1>
              <button onClick={navigateToMenuPage}>Online Menu</button>
            </div>
            <Card items={specials}/>
        </div>
      </section>
    </>
  )
}

export default Specials
