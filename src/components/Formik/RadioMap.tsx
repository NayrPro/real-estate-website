import { Field } from "formik"

export const RadioMap = (input, InputValue, error, touched, message) => {
    return(
        <fieldset style={(error && touched) && (error && {border: "1px solid red"} )}>
            <legend>{message} :</legend>
            {Object.keys(input).map((key,i) => (
                <div key={i}>
                    <Field type="radio" id={key} name={InputValue}
                    value={input[key]}/>
                    <label htmlFor={InputValue}>{key}</label>
                </div>
            ))}
        </fieldset>
    )
}