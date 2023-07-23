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


export const MyAccount = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const [update, setUpdate] = useState<string>("");

  const navigate = useNavigate();

  const InitialValues = {
      username: user.user.username,
      email: user.user.email
  }

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required").min(5, 'Username must be at least 5 characters long'),
    email: Yup.string().required("Email required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must match this format : 'abc@de.fg'")
  })

  useEffect(() => {
    (update == "UPDATE") && navigate("/");
  }, [update])
  
  return (
    <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={(values : object) =>{
                  dispatch(updateAsyncUsers({"user" : values, "authToken": user["authToken"]}));
                  setUpdate("UPDATE");
                }}>
            {
                formik => (
                <Form className="signup-form">
                  <h2>Account infos</h2>
                      {Object.keys(InitialValues).map((InitialValue, i) => ( 
                        <div key={i} className="form-control">
                        <label htmlFor={InitialValue}>{InitialValue}</label>
                        {(FormType(InitialValue) !== 'select')&& <Field 
                            id={InitialValue} 
                            name={InitialValue}
                            type={FormType(InitialValue)}
                            placeholder={[InitialValue]}
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} 
                         /> 
                      }
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