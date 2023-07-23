import * as Yup from 'yup'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import TextError from '../Formik/TextError';
import { FormType } from '../Formik/FormType';
import React = require('react');
import { updateAsyncComment } from '../../Store/reducers/commentReducer';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { RootState } from '../../Store/store';
import { useNavigate } from 'react-router-dom';
import './Comment.scss'

type Props = {
    id: number;
    body: String;
  };

export const EditComment: React.FC<Props> = ({id, body}) => {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state : RootState) => state.user.value);
    const navigate = useNavigate();

    const InitialValues = {
        newComment: body
    }
    const validationSchema = Yup.object({
        newComment: Yup.string().required("Your comment is empty")
    })

    return(
        <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={(values : object) =>{
                    dispatch(updateAsyncComment({id : id, body : values['newComment'], authToken : user["authToken"]}));
                    navigate(0);
                  }}>
            {
                formik => (
                    <Form>
                        <div className="comment__edit">
                        {Object.keys(InitialValues).map((InitialValue, i) => (
                            <React.Fragment key={i}>
                                    <Field 
                            className="comment__textarea"
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
                             style={{background : !formik.isValid && "grey"}} className="confirm__comment">Confirm</button>
                             </div>
                    </Form>
                )
            
            }
        </Formik>
    )
}