import * as Yup from 'yup'
import './Signup.scss';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import TextError from '../Formik/TextError';
import { FormType } from '../Formik/FormType';
import React = require('react');
  
export const LoginForm = () => {
  
  const InitialValues = {
      email: '',
      password: '',
  }
  
  const validationSchema = Yup.object({
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
  })
  
  const onSubmit = values =>{
    console.log('Form data', values)
  }
  
  return (
    <React.Fragment>
    <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
              formik => (
                <Form className="signup-form">
                  <h2>Log in</h2>
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
  