import { useState, useEffect } from 'react';
import { Property } from './Property';
import './PropertyCard.scss';
import './PropertyModal.scss';
import React = require('react');
import { propertyId, setId } from '../../Store/reducers/propertiesReducer';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { postAsyncTransaction } from '../../Store/reducers/transactionReducer';
import { RootState } from '../../Store/store';
import { useNavigate } from 'react-router-dom';

interface Props {
  property: Property;
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


const PropertyGrid: React.FC<Props> = ({ property }) => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const propertyClicked = useAppSelector(propertyId);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const transactions = useAppSelector((state : RootState) => state.transactions.sold);
  const navigate = useNavigate();
  const [isSold, setIsSold] = useState<boolean>();
  
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
  
  useEffect(()=>{
    const checkProperty = transactions.some(transaction => transaction["property_id"] === property._id);
    setIsSold(checkProperty);
  }, [transactions]);

  useEffect(()=>{
    return () => {
      dispatch(setId({payload : ""}))
     }
  }, []);

  const buyingProperty = () => {
    if(Object.keys(user).length > 0){
      dispatch(postAsyncTransaction({property_id : property._id, authToken: user["authToken"]})); 
      navigate(0); 
    }else{
      navigate('/login'); 
    }
  }
  
  return (
    <React.Fragment>
      <div className="property-modal" style={{display: (propertyClicked.payload !== "" && propertyClicked.payload == property._id && !isSold) ? "block" : "none"}}>
        <div className='exit-modal' onClick={(e) => dispatch(setId({payload : ""}))}><span className="material-symbols-outlined">
close
</span></div>
        <div className='property-modal-content'>
          <div className='property-modal-img'>
            <img src={property.url} alt={property.description} />
          </div>
          <div className='property-modal-details'>
          <h1>${formatNumber(property.price)}</h1>
          <p>{property.address}, {property.city}, {property.state} {property.zip} </p>
          <p><b>{property.bedrooms}</b> beds <b>{property.bathrooms}</b> baths <b>{property.sqft}</b> sqft</p>
          <p><b>Seller:</b> <span>{property.seller}</span></p>
          <p style={{marginBottom : "0"}}><b>Description:</b></p>
          <p style={{marginTop : "0"}}>{property.description}</p>
          {
            (user.hasOwnProperty('user') && user.user['username'] !== property.seller) && <button className='search-btn' onClick={(e) => buyingProperty() }>{property.toBuy? "Buy" : "Rent"}</button>
          }
          </div>
        </div>
      </div>
      
      <div className="property-card" onClick={(e) => !isSold && dispatch(setId({payload : property._id}))} id={property._id} style={{pointerEvents: isSold ? "none" : "auto"}}>
      {isSold && <div className="sold-overlay" onClick={(e) => e.preventDefault()}>
          <p>SOLD</p>
      </div>}
        <img src={property.url} alt={property.description} />
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
