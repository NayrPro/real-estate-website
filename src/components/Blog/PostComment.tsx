import * as Yup from 'yup'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import TextError from '../Formik/TextError';
import { FormType } from '../Formik/FormType';
import React = require('react');

export const PostComment: React.FC = () => {
    const InitialValues = {
        newComment: ''
    }
    const validationSchema = Yup.object({
        newComment: Yup.string().required("Your comment is empty")
    })

    const onSubmit = values =>{
        console.log('Form data', values)
    }

    return(
        <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => (
                    <Form className="comment__form">
                        <h4>Send a comment:</h4>
                        <div className="comment__input">
                        {Object.keys(InitialValues).map((InitialValue, i) => (
                            <React.Fragment>
                                    <Field key={i}
                            id={InitialValue} 
                            name={InitialValue}
                            as={FormType(InitialValue)}
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} 
                            />
                            <ErrorMessage name={InitialValue} component={TextError}/>
                            </React.Fragment>
                            )
                            )}
                        <button type="submit" 
                             disabled={!formik.isValid} 
                             style={{background : !formik.isValid && "grey"}} className="send__comment">Send</button>
                             </div>
                    </Form>
                )
            
            }
        </Formik>
    )
}