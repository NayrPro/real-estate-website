export interface Property {
    _id: string;
    description: string;
    url: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    city: string;
    state: string;
    zip: string;
    address: string;
    seller: string;    
    toBuy: boolean;    
    toRent: boolean;    
  }
  