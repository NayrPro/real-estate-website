import { useState, useEffect } from 'react';
import { Property } from './Property';
import './PropertyCard.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Store/store';
import { setId } from '../../Store/reducers/propertiesReducer';

interface Props {
  property: Property;
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


const PropertyCard: React.FC<Props> = ({ property }) => {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const dispatch = useDispatch<AppDispatch>();
  
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
  return (
    <div id={property._id} className="property-card" onClick={() => {dispatch(setId({payload : property._id})); navigate(`/buyorrent`)} }>
      <img src={property.url} alt={property.description} />
      <div className="card-bottom">
        <h2>${formatNumber(property.price)}</h2>
        <p>{property.address}, {property.zip}</p>
        <h2 className="city">{property.city} , {property.state}</h2>
        <div className="property-details">
          <div className="detail">
            <span className="label">{windowSize>700? "Beds:" : <span className="material-symbols-outlined">
bed
</span>}</span> {property.bedrooms}
          </div>
          <div className="detail">
            <span className="label">{windowSize>700? "Baths:" : <span className="material-symbols-outlined">
bathtub
</span>}</span> {property.bathrooms}
          </div>
          <div className="detail" style={{display: windowSize<700? "none": "block"}}>
            <span className="label">Sqft:</span> {property.sqft}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
