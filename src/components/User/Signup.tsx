import * as Yup from 'yup'
import './Signup.scss';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import TextError from '../Formik/TextError';
import { FormType } from '../Formik/FormType';
import { OptionsMap } from '../Formik/OptionsMap';


export const SignUpForm = () => {
  
  const options = {
    default: 'Choose an option',
    seller: 'Seller',
    blogger: 'Blogger'
  }

  const InitialValues = {
      username: '',
      email: '',
      password: '',
      usertype: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required"),
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required"),
    usertype: Yup.string().required("Role required")
  })

  const onSubmit = values =>{
    console.log('Form data', values)
  }
  
  return (
    <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => (
                <Form className="signup-form">
                  <h2>Create an account</h2>
                      {Object.keys(InitialValues).map((InitialValue, i) => ( 
                        <div key={i} className="form-control">
                        <label htmlFor={InitialValue}>{InitialValue}</label>
                        {(FormType(InitialValue) !== 'select')&& <Field 
                            id={InitialValue} 
                            name={InitialValue}
                            type={FormType(InitialValue)}
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} 
                         /> 
                      }{(FormType(InitialValue) == 'select')&&
                        <Field 
                            id={InitialValue} 
                            name={InitialValue}
                            as="select"
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} 
                         >
                            
                          {FormType(InitialValue)=="select" && OptionsMap(options)
                            }
                          </Field>}

                        <ErrorMessage name={InitialValue} component={TextError}/>
                        </div>
                      ))}
                      <button type="submit" 
                             disabled={!formik.isValid} 
                             style={{background : !formik.isValid && "grey"}}>Sign Up</button>
                      </Form>
                      )
                  }
              </Formik>
  );
};