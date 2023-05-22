import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'
import React = require('react')

const Input = (props) => {
    
    const { label, name, error, touched, type,...rest } = props
    const stylingError = (error, touched) =>{
        if((error && touched)){
                return error && {
                border: "1px solid red"} 
            }
        }
    
    return (
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <Field 
                id={name} 
                name={name}
                type={(type == "textarea" || type == "select")? "" : type}
                as={(type !== "textarea" && type !== "select")? "" : type}
                style={stylingError(error, touched)}
                {...rest} 
                />
            <ErrorMessage name={name} component={TextError}/>
        </React.Fragment>
        
        )
    }
/* This component will render only if it's current props
are different than the previous ones */
export default React.memo(Input)