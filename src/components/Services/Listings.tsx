// import axios from 'axios';
import { Property } from './Property';
import PropertyCard from './PropertyCard';
import './Properties.scss';
import { useState, useEffect } from 'react'; 

export const Listings: React.FC = () => {
//   const [properties, setProperties] = useState<Property[]>([]);

//   useEffect(() => {
//     axios.get('/api/properties').then((response) => {
//       setProperties(response.data);
//     });
//   }, []);

const [properties, setProperties] = useState<Property[]>([
    {
      _id: '1',
      title: 'Luxury Apartment in Manhattan',
      address: '123 Main St, New York, NY 10001',
      price: 2000000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2000,
      image: 'https://via.placeholder.com/250x150',
    },
    {
      _id: '2',
      title: 'Modern House in Los Angeles',
      address: '456 Elm St, Los Angeles, CA 90001',
      price: 1500000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2500,
      image: 'https://via.placeholder.com/250x150',
    },
    // add more properties as needed
  ]);
  return (
    <div className="properties">
      <h1>Properties for Sale</h1>
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};
