import React from 'react';
import './Menu.css';
import Heading from '../heading/Heading';
import { menu } from '../data/Data';
import Card from '../card/Card';

const Menu = () => {
  return (
    <>
      <section className='menu'>
        <Heading 
            title='Our Menu' 
            subtitle="Discover the wonderful variety of Mediterranean cuisine"
            image="/assets/restaurant-chef.jpg"
        />
        <div className='container mtop'>
            <Card items={menu}/>
        </div>
      </section>
    </>
  )
}

export default Menu
