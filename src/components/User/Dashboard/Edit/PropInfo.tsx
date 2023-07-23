import * as Yup from 'yup'
import { ErrorMessage, Field, Formik, Form } from 'formik'; 
import '../../../User/Signup.scss';
import '../../../Services/Sell.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import { RootState } from '../../../../Store/store';
import { updateAsyncProperty } from '../../../../Store/reducers/propertiesReducer';
import { FormType } from '../../../Formik/FormType';
import { OptionsMap } from '../../../Formik/OptionsMap';
import TextError from '../../../Formik/TextError';
import { Property } from '../../../Services/Property';

interface Props {
    property: Property;
}

export const PropInfo : React.FC<Props> = ({ property }) => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const navigate = useNavigate();

  const options = {
    bedrooms: {
      default: 'Choose an option',
      1: '1',
      2: '2',
      3: '3',
      4: '4'
    },
    bathrooms: {
      default: 'Choose an option',
      1: '1',
      2: '2',
      3: '3'
    }
  }

  const InitialValues = {
    address: property['address'],
    city: property['city'],
    state: property['state'],
    zip: property['zip'],
    price: property['price'],
    bedrooms: property['bedrooms'],
    bathrooms: property['bathrooms'],
    sqft: property['sqft'],
    description: property['description'],
    url: property['url']
  }

  const validationSchema = Yup.object({
    address: Yup.string().required("Address required"),
    city: Yup.string().required("City required"),
    state: Yup.string().required("State required"),
    zip: Yup.string().required("Zip Code required"),
    price: Yup.string().required("Price required"),
    bedrooms: Yup.string().required("Number of bedrooms required"),
    bathrooms: Yup.string().required("Number of bathrooms required"),
    sqft: Yup.string().required("Number of squarefoot required"),
    description: Yup.string().required("Description required"),
    url: Yup.string().required("Url link required"),
  })
  
    return (
      <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={(values : object) =>{
                  dispatch(updateAsyncProperty({id : property._id, values, authToken: user["authToken"]}));
                  navigate("/");
                  navigate(0);
                }}>
            {
              formik => (
                <Form className="signup-form sell-form">
                  <h2>Edit property</h2>
                  {
                    Object.keys(InitialValues).map((InitialValue, i) => (
                      <div key={i} className="form-control">
                        {
                          (FormType(InitialValue) !== 'radio') && <label htmlFor={InitialValue}>{InitialValue}</label>
                        }
                        {
                          ((FormType(InitialValue) !== 'select' && FormType(InitialValue) !== 'radio'))&& <Field 
                            id={InitialValue} 
                            name={InitialValue}
                            min={FormType(InitialValue) == 'number'? "0" : null}
                            type={FormType(InitialValue)}
                            style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )} /> 
                        }
                        {
                          ((FormType(InitialValue) == 'select'))&& <Field 
                          id={InitialValue} 
                          name={InitialValue}
                          as="select"
                          style={(formik.errors[InitialValue] && formik.touched[InitialValue]) && (formik.errors[InitialValue] && {border: "1px solid red"} )}>
                            {
                              FormType(InitialValue)=="select" && OptionsMap(options[InitialValue])
                            }
                          </Field>
                        }
                        <ErrorMessage name={InitialValue} component={TextError}/>
                      </div>
                    ))
                  }
                  <button type="submit" 
                             disabled={!formik.isValid} 
                             style={{background : !formik.isValid && "grey"}}>Edit</button>
                </Form>
              )
            }
      </Formik>
      
    );
  };