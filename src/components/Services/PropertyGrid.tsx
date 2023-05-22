import { useState, useEffect } from 'react';
import { Property } from './Property';
import './PropertyCard.scss';
import './PropertyModal.scss';
import React = require('react');

interface Props {
  property: Property;
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


const PropertyGrid: React.FC<Props> = ({ property }) => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [showModal, setShowModal] = useState<boolean>(false);

  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(()=>{
    setWindowSize(window.innerWidth)
    
  }, [windowSize]);

  const handleClick = (e) => {
    showModal ? setShowModal(false) : setShowModal(true);
  };
  
  return (
    <React.Fragment>
      <div className="property-modal" style={{display: showModal ? "block" : "none"}}>
        <div className='exit-modal' onClick={(e) => handleClick(e)}><span className="material-symbols-outlined">
close
</span></div>
        <div className='property-modal-content'>
          <div className='property-modal-img'>
            <img src={property.image} alt={property.description} />
          </div>
          <div className='property-modal-details'>
          <h1>${formatNumber(property.price)}</h1>
          <p>{property.address}, {property.city}, {property.state} {property.zip} </p>
          <p><b>{property.bedrooms}</b> beds <b>{property.bathrooms}</b> baths <b>{property.sqft}</b> sqft</p>
          <p><b>Seller:</b> <span>{property.seller}</span></p>
          <p style={{marginBottom : "0"}}><b>Description:</b></p>
          <p style={{marginTop : "0"}}>{property.description}</p>
          <button className='search-btn'>{property.toBuy? "Buy" : "Rent"}</button>
          </div>
        </div>
      </div>
      
      <div className="property-card" onClick={(e) => handleClick(e)}>
        <img src={property.image} alt={property.description} />
        <div className="card-bottom">
          <h2>${formatNumber(property.price)}</h2>
          <p>{property.address}, {property.zip}</p>
          <h2 className="city">{property.city} , {property.state}</h2>
          <div className="property-details">
            <div className="detail">
              <span className="label">
                <span className="material-symbols-outlined">
                  bed
                </span>
              </span> 
              {property.bedrooms}
            </div>
            <div className="detail">
              <span className="label">
                <span className="material-symbols-outlined">
                  bathtub
                </span>
              </span> 
              {property.bathrooms}
            </div>
            <div className="detail" style={{display: windowSize<970? "none": "block"}}>
              <span className="label">Sqft:</span> {property.sqft}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PropertyGrid;
