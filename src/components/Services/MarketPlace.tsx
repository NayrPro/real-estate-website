import { useEffect, useState } from "react";
import { Field, Formik, Form } from 'formik';
import { OptionsMap } from '../Formik/OptionsMap';
import "./MarkePlace.scss";
import { Property } from "./Property";
import PropertyGrid from "./PropertyGrid";

export const MarketPlace: React.FC = () => {

    const options = {
        citySlct:{
          default: "Cities",
        },
        stateSlct:{
          default: "States",
        },
        properties:{
          default: "properties",
          sell: "For Sell",
          rent: "For Rent",
        },
        seller:{
          default: "Seller",
          AtHome: "@Home",
        },
        bedrooms:{
          default:"Bedrooms",
          1:"1+",
          2:"2+",
          3:"3+",
          4:"4+"
        },
        bathrooms:{
          default:"Bathrooms",
          1:"1+",
          2:"2+",
          3:"3+"
        },
        maxPrice:{
          default:"Max Price",
          100000: '$100,000',
          200000: '$200,000',
          300000: '$300,000',
          400000: '$400,000',
          500000: '$500,000',
          600000: '$600,000',
          700000: '$700,000',
          800000: '$800,000',
          900000: '$900,000',
          1000000: '$1,000,000'
        },
        minSqft: {
          default:"Min Sqft",
          1000: '1,000+',
          1500: '1,500+',
          2000: '2,000+',
          2500: '2,500+',
          3000: '3,000+'
        }
      }

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

      const InitialValues = {
        citySlct:'',
        stateSlct:'',
        properties:'',
        seller:'',
        bedrooms:'',
        bathrooms:'',
        maxPrice:'',
        minSqft:'',
    };

    const onSubmit = values =>{
        console.log('Form data', values)
    }

    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

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

    function styleProps (selectValue){ 
        let styles = {}
            if (selectValue == "bedrooms" || selectValue == "bathrooms"){
              if(windowSize<1050){
                const style = {
                   display: "none"
                }
                styles = Object.assign(styles,style);
              }else{
                const style = {
                   display: "flex"
                }
                styles = Object.assign(styles,style);
              }
              
            }
            if (selectValue == "maxPrice" || selectValue == "minSqft"){
              if(windowSize<850){
                const style = {
                   display: "none"
                }
                styles = Object.assign(styles,style);
              }else{
                const style = {
                   display: "flex"
                }
                styles = Object.assign(styles,style);
              }
            }
            if (selectValue == "citySlct" || selectValue == "seller"){
              if(windowSize<700){
                const style = {
                   display: "none"
                }
                styles = Object.assign(styles,style);
              }else{
                const style = {
                   display: "flex"
                }
                styles = Object.assign(styles,style);
              }
            }
            return styles
        }

    return (
        <div className="service-page">
           <Formik initialValues={InitialValues}
                onSubmit={onSubmit}>
          {
              formik => (
                <Form className="property-search-form">
                    {
                      Object.keys(InitialValues).map((InitialValue, i) => (
                          <div key={i} className="form-row" style={styleProps(InitialValue)}>
                            <Field
                              id={InitialValue} 
                              name={InitialValue}
                              as="select">
                                  {OptionsMap(options[InitialValue])}
                            </Field>
                        </div> 
                        )
                      )
                    }
                  <button type="submit" className="search-btn">
                    <span className="material-symbols-outlined">
                      search
                    </span>
                  </button>      
                </Form>
              )
          }

        </Formik> 
          <div className="property-grid">
            {properties.map((property) => (
                <PropertyGrid key={property._id} property={property} />
                ))}
          </div>
        </div>
    );
};