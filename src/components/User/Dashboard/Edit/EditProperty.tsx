import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import { RootState } from '../../../../Store/store';
import { getAsyncProperty} from '../../../../Store/reducers/propertiesReducer';
import { useEffect } from 'react';
import { PropInfo } from './PropInfo';


export const EditProperty = () => {

  const dispatch = useAppDispatch();
  const property = useAppSelector((state : RootState) => state.properties.value);
  const propertyError = useAppSelector((state : RootState) => state.properties.error);
  const params= useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAsyncProperty({id : params.id}));
    propertyError !== null && navigate('/');
  }, [property['_id']])

  
    return (
        property['_id'] == params.id && <PropInfo property={property}/>
    );
  };