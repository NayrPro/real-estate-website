import { Property } from './Property';
import './PropertyCard.scss';

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      {/* <p>{property.description}</p> */}
      <div className="property-details">
        <div className="detail">
          <span className="label">Price:</span> {property.price}
        </div>
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
  );
};

export default PropertyCard;
