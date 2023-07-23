import * as Yup from 'yup'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import TextError from '../Formik/TextError';
import { FormType } from '../Formik/FormType';
import React = require('react');
import { postAsyncComment } from '../../Store/reducers/commentReducer';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { RootState } from '../../Store/store';
import { useNavigate } from 'react-router-dom';

type Props = {
    id: string;
  };

export const PostComment: React.FC<Props> = ({id}) => {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state : RootState) => state.user.value);
    const navigate = useNavigate();

    const InitialValues = {
        newComment: ''
    }
    const validationSchema = Yup.object({
        newComment: Yup.string().required("Your comment is empty")
    })

    return(
        <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={(values : object) =>{
                    dispatch(postAsyncComment({post_id: id, body : values['newComment'], authToken: user["authToken"]}));
                    navigate(0);
                  }}>
            {
                formik => (
                    <Form className="comment__form">
                        <h4>Send a comment:</h4>
                        <div className="comment__input">
                        {Object.keys(InitialValues).map((InitialValue, i) => (
                            <React.Fragment key={i}>
                                    <Field 
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