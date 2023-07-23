import * as Yup from 'yup' 
import './Signup.scss'; 
import { ErrorMessage, Field, Formik, Form } from 'formik';
import TextError from '../../Formik/TextError';
import { FormType } from '../../Formik/FormType';
import { useEffect, useState } from 'react';
import { updateAsyncUsers } from '../../../Store/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';
import { useNavigate } from 'react-router-dom';


export const Password = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const [update, setUpdate] = useState<string>("");
  const pswLabel1 = "Enter a new password";
  const pswLabel2 = "Confirm your new password";

  const navigate = useNavigate();

  const InitialValues = {
      password: "",
      confirm: ""
  }

  const validationSchema = Yup.object({
    password: Yup.string().required("Password required").min(8, 'Password must be at least 8 characters long')
    .matches(/\d/, "Password must contain at least one digit")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
    confirm: Yup.string().required("Password confirmation required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  useEffect(() => {
    (update == "UPDATE") && navigate("/");
  }, [update])
  
  return (
    <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={(values : object) =>{
                  const password = {"password" : values['password']};
                  dispatch(updateAsyncUsers({"user" : password, "authToken": user["authToken"]}));
                  setUpdate("UPDATE");
                }}>
            {
                formik => (
                <Form className="signup-form">
                  <h2>Modify password</h2>
                      {Object.keys(InitialValues).map((InitialValue, i) => ( 
                        <div key={i} className="form-control">
                        <label htmlFor={InitialValue}>{InitialValue == "password" ? pswLabel1 : pswLabel2}</label>
                        <Field 
                            id={InitialValue} 
                            name={InitialValue}
                            type="password"
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} 
                         /> 
                        <ErrorMessage name={InitialValue} component={TextError}/>
                        </div>
                      ))}
                      <button type="submit" 
                             disabled={!formik.isValid} 
                             style={{background : !formik.isValid && "grey"}}>Save Changes</button>
                      </Form>
                      )
                  }
              </Formik>
  );
};