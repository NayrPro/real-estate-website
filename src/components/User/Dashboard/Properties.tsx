import './Accounts.scss'; 
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';
import { deleteAsyncProperty, getAsyncProperties } from '../../../Store/reducers/propertiesReducer';


export const Properties = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const properties = useAppSelector((state : RootState) => state.properties.values);
  const [change, setChange] = useState<number>(0);

  useEffect(() => {
    dispatch(getAsyncProperties({}));
  }, [change])
  
  return (
    <div className="acc">
      <table className="acc-tbl">
        <thead className="acc-thead">
            <tr className='acc-tbl-head'>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {Object.keys(properties).map((property, i) => (
                <tr key={i}>
                    <td data-title="Address" className='acc-td'>{properties[property]["address"]}</td>
                    <td data-title="City" className='acc-td'>{properties[property]["city"]}</td>
                    <td data-title="State" className='acc-td'>{properties[property]["state"]}</td>
                    <td data-title="Seller" className='acc-td'>{properties[property]["seller"]}</td>
                    <td data-title="Price" className='acc-td'>${properties[property]["price"]}</td>
                    <td data-title="Delete" className='acc-td'>
                        <button className='acc-btn-delete' onClick={() =>{
                          dispatch(deleteAsyncProperty({authToken : user["authToken"], id : properties[property]['_id']}))
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