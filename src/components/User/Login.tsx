import * as Yup from 'yup'
import './Signup.scss';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import TextError from '../Formik/TextError';
import { FormType } from '../Formik/FormType';
import React = require('react');
import { useEffect } from 'react';
import { createAsyncLogin, resetError} from '../../Store/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { RootState } from '../../Store/store';
  
export const LoginForm = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const error = useAppSelector((state : RootState) => state.user.error);

  const InitialValues = {
      email: '',
      password: '',
  }
  
  const validationSchema = Yup.object({
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
  })
  
  useEffect(()=> {
    
    dispatch(resetError())
    const unloadCallback = () => {  dispatch(resetError()) };
    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      dispatch(resetError())
      window.removeEventListener("beforeunload", unloadCallback);
    }
    
  },[])
  
  return (
    <React.Fragment>
    <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={(values : object) =>{
                  dispatch(createAsyncLogin(values));
                }}>
            {
              formik => (
                <Form className="signup-form">
                  <h2>Log in</h2>
                  {(error !== undefined && Object.keys(user).length < 1) && <div className="error-box-message">{error}</div>}
                      {Object.keys(InitialValues).map((InitialValue, i) => ( 
                        <div key={i} className="form-control">
                        <label htmlFor={InitialValues[i]}>{InitialValue}</label>
                        <Field 
                            id={InitialValue} 
                            name={InitialValue}
                            type={FormType(InitialValue)}
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} 
                            />
                        <ErrorMessage name={InitialValue} component={TextError}/>
                        </div>
                      ))}
                      <button type="submit" 
                             disabled={!formik.isValid} 
                             style={{background : !formik.isValid && "grey"}}>Log In</button>
                      </Form>
                      )
                  }
              </Formik>
    </React.Fragment>
  );
};
  