import { Field, Formik, Form } from 'formik';
import { OptionsMap } from '../Formik/OptionsMap';
import { useState, useEffect } from "react";
import "./Presentation.scss";
import { RootState } from '../../Store/store';
import { getAsyncProperties } from '../../Store/reducers/propertiesReducer';
import { useNavigate } from 'react-router-dom';
import { ReplaceKeys } from '../Formik/ReplaceKeys';
import { selectOptions } from '../functions/selectOptions'
import { getAsyncCities } from '../../Store/reducers/filtersReducers';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { styleProps } from '../functions/styleProps';



export const Presentation: React.FC = () => {

  const cities = useAppSelector((state : RootState) => state.filters.cities);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const InitialValues = {
    citySlct: '',
    bedrooms: '',
    bathrooms: '',
    max_price: '',
    min_sqft: '',
  };

  useEffect(()=> {
    dispatch(getAsyncCities());
  },[])

  
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
        <Formik initialValues={InitialValues}
                onSubmit={(values: object) =>{
                  const newValues = ReplaceKeys(values);
                  dispatch(getAsyncProperties(newValues));
                  navigate(`/buyorrent`);
                }}>
          {
              formik => (
                <Form className="property-search-form">
                    {
                      Object.keys(InitialValues).map((InitialValue, i) => (
                          <div key={i} className="form-row" style={styleProps(InitialValue, windowSize)}>
                            <Field 
                              id={InitialValue} 
                              name={InitialValue}
                              as="select">
                                  {OptionsMap(selectOptions(cities)[InitialValue])}
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
