import { useEffect, useState } from "react";
import { Field, Formik, Form } from 'formik';
import { OptionsMap } from '../Formik/OptionsMap';
import "./MarkePlace.scss";
import { Property } from "./Property";
import PropertyGrid from "./PropertyGrid";
import { RootState } from "../../Store/store";
import { getAsyncProperties } from "../../Store/reducers/propertiesReducer";
import { getAsyncCities, getAsyncStates, getAsyncSellers } from "../../Store/reducers/filtersReducers";
import { ReplaceKeys } from "../Formik/ReplaceKeys";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { selectOptions2 } from "../functions/selectOptions2";
import { styleProps2 } from "../functions/styleProps2";
import { getAsyncSoldProperty } from "../../Store/reducers/transactionReducer";

export const MarketPlace: React.FC = () => {

  const properties = useAppSelector((state : RootState) => state.properties.values);
  const user = useAppSelector((state : RootState) => state.user.value);
  const cities = useAppSelector((state : RootState) => state.filters.cities);
  const states = useAppSelector((state : RootState) => state.filters.states);
  const sellers = useAppSelector((state : RootState) => state.filters.sellers);
  const dispatch = useAppDispatch();
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    if(properties.length < 1){
      dispatch(getAsyncProperties({}))
    }
    dispatch(getAsyncCities());
    dispatch(getAsyncStates());
    dispatch(getAsyncSellers());
    dispatch(getAsyncSoldProperty());
  }, []);

  const InitialValues = {
    citySlct:'',
    stateSlct:'',
    properties:'',
    seller:'',
    bedrooms:'',
    bathrooms:'',
    max_price:'',
    min_sqft:'',
  };

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
      <div className="service-page">
          <Formik initialValues={InitialValues}
              onSubmit={(values: object) =>{
                const newValues = ReplaceKeys(values);
                dispatch(getAsyncProperties(newValues));
              }}>
        {
            formik => (
              <Form className="property-search-form">
                  {
                    Object.keys(InitialValues).map((InitialValue, i) => (
                        <div key={i} className="form-row" style={styleProps2(InitialValue, windowSize)}>
                          <Field
                            id={InitialValue} 
                            name={InitialValue}
                            as="select">
                                {OptionsMap(selectOptions2(cities,states,sellers)[InitialValue])}
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
          {properties.map((property : Property) => (
              <PropertyGrid key={property._id} property={property} />
              ))}
        </div>
      </div>
  );
};