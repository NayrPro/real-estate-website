import { Field, Formik, Form } from 'formik';
import { OptionsMap } from '../Formik/OptionsMap';
import { useState, useEffect } from "react";
import "./Presentation.scss";


export const Presentation: React.FC = () => {
  const options = {
    citySlct:{
      default: "Choose a city",
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
  
  const InitialValues = {
    citySlct: '',
    bedrooms: '',
    bathrooms: '',
    maxPrice: '',
    minSqft: '',
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
          if(windowSize<1000){
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
    <section className="home-section">
      <div className="header">
        <h1 className="slogan">Find your dream home today</h1>
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
        <p className="description">
          Welcome to our real estate website! We provide a comprehensive listing of properties for sale in your area. Whether you're looking for a new family home, an investment property, or something in between, we've got you covered.
        </p>
      </div>
    </section>
  );
};
