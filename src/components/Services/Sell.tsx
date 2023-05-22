import * as Yup from 'yup'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import TextError from '../Formik/TextError';
import { FormType } from '../Formik/FormType';
import { RadioMap } from '../Formik/RadioMap'; 
import '../User/Signup.scss';
import './Sell.scss'
import { OptionsMap } from '../Formik/OptionsMap';


export const Sell = () => {

  const radio = {
    transaction :{
    rent: 'toRent',
    buy: 'toBuy'
    }
  }

  const radioMessage = "Is your property is for";

  const options = {
    bedrooms: {
      default: 'Choose an option',
      1: '1',
      2: '2',
      3: '3',
      4: '4'
    },
    bathrooms: {
      default: 'Choose an option',
      1: '1',
      2: '2',
      3: '3'
    }
  }

  const InitialValues = {
    address: '',
    city: '',
    state: '',
    zip: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    description: '',
    url: '',
    transaction: '',
  }

  const validationSchema = Yup.object({
    address: Yup.string().required("Address required"),
    city: Yup.string().required("City required"),
    state: Yup.string().required("State required"),
    zip: Yup.string().required("Zip Code required"),
    price: Yup.string().required("Price required"),
    bedrooms: Yup.string().required("Number of bedrooms required"),
    bathrooms: Yup.string().required("Number of bathrooms required"),
    sqft: Yup.string().required("Number of squarefoot required"),
    description: Yup.string().required("Description required"),
    url: Yup.string().required("Url link required"),
    transaction: Yup.string().required("Transaction type required")
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
                <Form className="signup-form sell-form">
                  <h2>Post your property</h2>
                  {
                    Object.keys(InitialValues).map((InitialValue, i) => (
                      <div key={i} className="form-control">
                        {
                          (FormType(InitialValue) !== 'radio') && <label htmlFor={InitialValue}>{InitialValue}</label>
                        }
                        {
                          ((FormType(InitialValue) !== 'select' && FormType(InitialValue) !== 'radio'))&& <Field 
                            id={InitialValue} 
                            name={InitialValue}
                            min={FormType(InitialValue) == 'number'? "0" : null}
                            type={FormType(InitialValue)}
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} /> 
                        }
                        {
                          ((FormType(InitialValue) == 'select'))&& <Field 
                          id={InitialValue} 
                          name={InitialValue}
                          as="select"
                          style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )}>
                            {
                              FormType(InitialValue)=="select" && OptionsMap(options[InitialValue])
                            }
                          </Field>
                        }
                        {
                          (FormType(InitialValue) == 'radio') && RadioMap(radio[InitialValue], InitialValue, formik.errors[InitialValue], formik.touched[InitialValue], radioMessage)
                        }
                        <ErrorMessage name={InitialValue} component={TextError}/>
                      </div>
                    ))
                  }
                  <button type="submit" 
                             disabled={!formik.isValid} 
                             style={{background : !formik.isValid && "grey"}}>Post</button>
                </Form>
              )
            }
      </Formik>
      
    );
  };