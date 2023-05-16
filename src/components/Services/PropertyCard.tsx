import { Property } from './Property';
import './PropertyCard.scss';

interface Props {
  property: Property;
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.description} />
      <div className="card-bottom">
        <h2>${formatNumber(property.price)}</h2>
        <p>{property.address}, {property.zip}</p>
        <h2 className="city">{property.city} , {property.state}</h2>
        <div className="property-details">
          {/* <div className="detail">
            <span className="label">Price:</span> {property.price}
          </div> */}
          <div className="detail">
            <span className="label">Beds:</span> {property.bedrooms}
          </div>
          <div className="detail">
            <span className="label">Baths:</span> {property.bathrooms}
          </div>
          <div className="detail">
            <span className="label">Sqft:</span> {property.sqft}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
