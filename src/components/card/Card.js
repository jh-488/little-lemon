import React from 'react';
import './Card.css';

const Card = ({items}) => {
  return (
    <>
      <div className='card grid3 mtop'>
            {items.map((item, index) => {
                const {image, name, price, description} = item;
                return (
                    <div className='box shadow' key={index}>
                        <div className='img'>
                            <img src={image} alt='Dish cover'/>
                        </div>
                        <div className='text'>
                            <div className='grid2'>
                                <h4>{name}</h4>
                                <h4 className='price'>{price}</h4>
                            </div>
                            <p>{description}</p>
                        </div>
                        <div className='button'>
                            <button>Order a delivery <i className='fa fa-motorcycle'></i></button>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Card
