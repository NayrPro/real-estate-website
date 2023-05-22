// import axios from 'axios';
import { Property } from './Property';
import PropertyCard from './PropertyCard';
import './Properties.scss';
import { useState, useEffect } from 'react'; 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


export const Listings: React.FC = () => {
//   const [properties, setProperties] = useState<Property[]>([]);

//   useEffect(() => {
//     axios.get('/api/properties').then((response) => {
//       setProperties(response.data);
//     });
//   }, []);

const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
const [slidesNb, setSlidesNb] = useState<number>(3);

useEffect(() => {
  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };
  
  window.addEventListener('resize', handleWindowResize);
  if(windowSize>1200){ setSlidesNb(3)};
  if(windowSize<1200 && windowSize>780){ setSlidesNb(2)};
  if(windowSize<780){setSlidesNb(1)};

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}, []);

useEffect(()=>{
  setWindowSize(window.innerWidth)
  if(windowSize>1200){ setSlidesNb(3)};
  if(windowSize<1200 && windowSize>780){ setSlidesNb(2)};
  if(windowSize<780){setSlidesNb(1)};
  
}, [windowSize]);

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
      seller: "@Home",
      toBuy: true,
      toRent: false,
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
      seller: "@Home",
      toBuy: true,
      toRent: false,
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
      seller: "@Home",
      toBuy: true,
      toRent: false,
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
      seller: "@Home",
      toBuy: true,
      toRent: false,
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
      seller: "@Home",
      toBuy: true,
      toRent: false,
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
      seller: "@Home",
      toBuy: true,
      toRent: false,
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    
  ];
  return (
    <div className="properties">
      <h1>Properties for Sale</h1>
      <Swiper className="property-grid property-flex"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={45}
      slidesPerView={slidesNb}
      navigation={windowSize>1200? true : false}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        {properties.map((property) => (
          <SwiperSlide key={property._id + 5}>
            <PropertyCard key={property._id} property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
