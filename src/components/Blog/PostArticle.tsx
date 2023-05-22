import * as Yup from 'yup'
import '../User/Signup.scss';
import '../Services/Sell.scss'
import { FormType } from '../Formik/FormType';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextError from '../Formik/TextError';


export const PostArticle = () => {
  
  const InitialValues = {
    title: '',
    body: '',
    url: '',
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("Title required"),
    body: Yup.string().required("Article content required"),
    url: Yup.string().required("Url empty")
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
              <h2>Post a new article</h2>
              {
                Object.keys(InitialValues).map((InitialValue, i) => (
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
                  )
                )  
              }
              <div className="contact-submit">
                <button type="submit" 
                        disabled={!formik.isValid} 
                        style={{background : !formik.isValid && "grey"}}>Post</button>
              </div>
            </Form> 
          )
      }            

    </Formik>

  );
};