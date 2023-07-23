import './Accounts.scss'; 
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';
import { deleteAsyncMyProperty, getAsyncProperties, updateAsyncProperty } from '../../../Store/reducers/propertiesReducer';
import { useNavigate } from 'react-router-dom';


export const MyProperties = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const properties = useAppSelector((state : RootState) => state.properties.values);
  const [change, setChange] = useState<number>(0);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getAsyncProperties({seller : user["user"]["username"]}));
  }, [change])
  
  return (
    <div className="acc">
      <table className="acc-tbl">
        <thead className="acc-thead">
            <tr className='acc-tbl-head'>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {Object.keys(properties).map((property, i) => (
                <tr key={i}>
                    <td data-title="Address" className='acc-td'>{properties[property]["address"]}</td>
                    <td data-title="City" className='acc-td'>{properties[property]["city"]}</td>
                    <td data-title="State" className='acc-td'>{properties[property]["state"]}</td>
                    <td data-title="Price" className='acc-td'>${properties[property]["price"]}</td>
                    <td data-title="Actions" className='acc-td'>
                        <button className='acc-btn-update' onClick={() =>{
                          navigate(`/edit/property/${properties[property]['_id']}`);  
                        }
                        }
                        ><span className="material-symbols-outlined">
                        edit
                        </span></button>
                        <button className='acc-btn-delete' onClick={() =>{
                          dispatch(deleteAsyncMyProperty({authToken : user["authToken"], id : properties[property]['_id'], seller : user["user"]["username"]}))
                          setChange(change+1)}
                        }
                        ><span className="material-symbols-outlined">
                        close
                        </span></button>
                    </td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};