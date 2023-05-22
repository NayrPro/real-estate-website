import * as Yup from 'yup'
import './ContactUs.scss';
import { FormType } from '../Formik/FormType';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextError from '../Formik/TextError';
export const ContactUs: React.FC = () => {

    const InitialValues = {
        name: '',
        email: '',
        message: '',
    } 
    
    const validationSchema = Yup.object({
        name: Yup.string().required("Name required"),
        email: Yup.string().required("Email required"),
        message: Yup.string().required("Message empty")
    })

    const onSubmit = values =>{
         console.log('Form data', values)
    }

    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
                <div className="login-form">
                    <p>Please use the form below to get in touch with us.</p>
                    <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => (
                <Form>
                      {Object.keys(InitialValues).map((InitialValue, i) => ( 
                        <div key={i} className="form-control">
                        <label htmlFor={InitialValue}>{InitialValue}</label>
                        <Field 
                            id={InitialValue} 
                            name={InitialValue}
                            type={(FormType(InitialValue) == "textarea")? null : FormType(InitialValue)}
                            as={(FormType(InitialValue) !== "textarea")? null : FormType(InitialValue)}
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} 
                            />
                        <ErrorMessage name={InitialValue} component={TextError}/>
                        </div>
                      ))}
                      <div className="contact-submit">
                        <button type="submit" 
                                disabled={!formik.isValid} 
                                style={{background : !formik.isValid && "grey"}}>Submit</button>
                      </div>
                      </Form>
                      )
                  }
              </Formik>
                </div>
        </div>
    )
}
