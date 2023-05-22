import {Formik, Form} from 'formik'
import Input from "./Input"
import { FormType } from './FormType'

export default function FormikComponent(props) {

    return (
        <Formik initialValues={props.InitialValues}
                validationSchema={props.validationSchema}
                onSubmit={props.onSubmit}>
            {
                formik => (
                <Form>
                        {Object.keys(props.InitialValues).map((InitialValue, i) => (
                            <Input 
                                key= {i}
                                type={FormType(InitialValue)}
                                label= {InitialValue}
                                name= {InitialValue}
                                error = {formik.errors[InitialValue]}
                                touched = {formik.touched[InitialValue]}
                            />
                        ))}
                    
                    <button
                             type="submit" 
                             disabled={!formik.isValid} 
                             style={{background : !formik.isValid && "grey"}}>Submit
                    </button>
                </Form>
                )
            }
        </Formik>
    )
}