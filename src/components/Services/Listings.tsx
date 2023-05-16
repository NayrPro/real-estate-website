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
      description: 'Luxury Apartment in Manhattan',
      address: '123 Main St', 
      zip: '10001',
      city: 'New York',
      state: 'NY',
      price: 2000000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2000,
      image: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      _id: '2',
      description: 'Modern House in Los Angeles',
      address: '456 Elm St', 
      zip: '90001',
      city:'Los Angeles',
      state: 'CA',
      price: 1500000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2500,
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    
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
