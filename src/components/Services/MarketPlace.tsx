import { useState } from "react";
import "./MarkePlace.scss";
import { Property } from "./Property";
import PropertyGrid from "./PropertyGrid";

export const MarketPlace: React.FC = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // onSubmit(formData);
    };

    const properties : Property[] = [
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
        {
          _id: '3',
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
        {
          _id: '4',
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
        {
          _id: '5',
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
        {
          _id: '6',
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
        
      ];

    const [formData, setFormData] = useState({
        city: '',
        state: '',
        price: 0,
        bedrooms: 0,
        bathrooms: 0,
        minSqft: 0,
        maxPrice: 0,
        forSell: false,
        forRent: false,
        seller: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="service-page">
          <form className="property-search-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <select name="city" id="city" onChange={handleChange}>
                    <option value="" disabled selected>Cities</option>
                </select>
            </div>
            <div className="form-row">
                <select name="state" id="state" onChange={handleChange}>
                    <option value="" disabled selected>States</option>
                </select>
            </div>
            <div className="form-row">
                <select name="price" id="price" onChange={handleChange}>
                  <option value="" disabled selected>Max Price</option>
                  <option value="100000">$100,000</option>
                  <option value="200000">$200,000</option>
                  <option value="300000">$300,000</option>
                  <option value="400000">$400,000</option>
                  <option value="500000">$500,000</option>
                  <option value="600000">$600,000</option>
                  <option value="700000">$700,000</option>
                  <option value="800000">$800,000</option>
                  <option value="900000">$900,000</option>
                  <option value="1000000">$1,000,000</option>
                </select>
            </div>
            <div className="form-row">
                <select name="bedrooms" id="bedrooms" onChange={handleChange}>
                    <option value="" disabled selected>Bedrooms</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                </select>
            </div>
            <div className="form-row">
                <select name="bathrooms" id="bathrooms" onChange={handleChange}>
                    <option value="" disabled selected>Bedrooms</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                </select>
            </div>
            <div className="form-row">
                <select name="minSqft" id="minSqft" onChange={handleChange}>
                    <option value=""disabled selected>Min Sqft</option>
                    <option value="1000">1,000+</option>
                    <option value="1500">1,500+</option>
                    <option value="2000">2,000+</option>
                    <option value="2500">2,500+</option>
                    <option value="3000">3,000+</option>
                </select>
            </div>
            <div className="form-row">
                <select name="properties" id="properties" onChange={handleChange}>
                    <option value="for sell">For Sell</option>
                    <option value="for rent">For Rent</option>
                    <option value="both">Both</option>
                </select>
            </div>
            <div className="form-row">
                <select name="seller" id="seller" onChange={handleChange}>
                    <option value=""disabled selected>Seller</option>
                    <option value="">@Home</option>
                </select>
            </div>
                <button className="search-btn" type="submit">
                    Search
                </button>
          </form>
          <div className="property-grid">
            {properties.map((property) => (
                <PropertyGrid key={property._id} property={property} />
                ))}
          </div>
        </div>
    );
  };