import { PropertyAttributes } from './models/propertyModel';
import { useState, useEffect } from "react";
import "./Presentation.scss";


// interface Props {
//   properties: PropertyAttributes[];
//   onSubmit: (formData: any) => void;
// }


export const Presentation: React.FC = () => {
  const [formData, setFormData] = useState({
    city: '',
    bedrooms: '',
    bathrooms: '',
    maxPrice: '',
    minSqft: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSubmit(formData);
  };

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

  return (
    <section className="home-section">
      <div className="header">
        <h1 className="slogan">Find your dream home today</h1>
        <form className="property-search-form" onSubmit={handleSubmit}>
          <div className="form-row">
              {/* <label htmlFor="city">City:</label> */}
              <select name="city" id="city" onChange={handleChange}>
                  <option value="" disabled selected>Choose a city</option>
                  {/* {properties.map(property => (
                  <option key={property.city} value={property.city}>
                      {property.city}
                  </option>
                  ))} */}
              </select>
          </div>
          <div className="form-row" style={{display: windowSize<1000 ? "none" : "flex"}}>
              {/* <label htmlFor="bedrooms">Bedrooms:</label> */}
              <select name="bedrooms" id="bedrooms" onChange={handleChange}>
                  <option value="" disabled selected>Bedrooms</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
              </select>
          </div>
          <div className="form-row" style={{display: windowSize<1000 ? "none" : "flex"}}>
              {/* <label htmlFor="bathrooms">Bathrooms:</label> */}
              <select name="bathrooms" id="bathrooms" onChange={handleChange}>
                  <option value="" disabled selected>Bathrooms</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
              </select>
          </div>
          <div className="form-row" style={{display: windowSize<700 ? "none" : "flex"}}>
              {/* <label htmlFor="maxPrice">Max Price:</label> */}
              <select name="maxPrice" id="maxPrice" onChange={handleChange}>
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
          <div className ="form-row" style={{display: windowSize<700 ? "none" : "flex"}}>
              {/* <label htmlFor="minSqft">Min Sqft:</label> */}
              <select name="minSqft" id="minSqft" onChange={handleChange}>
                  <option value=""disabled selected>Min Sqft</option>
                  <option value="1000">1,000+</option>
                  <option value="1500">1,500+</option>
                  <option value="2000">2,000+</option>
                  <option value="2500">2,500+</option>
                  <option value="3000">3,000+</option>
              </select>
          </div>
          <button className="search-btn" type="submit">
            <span className="material-symbols-outlined">
              search
            </span>
          </button>
        </form>
        <p className="description">
          Welcome to our real estate website! We provide a comprehensive listing of properties for sale in your area. Whether you're looking for a new family home, an investment property, or something in between, we've got you covered.
        </p>
      </div>
    </section>
  );
};
