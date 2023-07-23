import './Accounts.scss'; 
import { useEffect } from 'react';
import { deleteAsyncSomeUser, getAsyncUsers } from '../../../Store/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';


export const Accounts = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const users = useAppSelector((state : RootState) => state.user.values);

  useEffect(() => {
    dispatch(getAsyncUsers({authToken : user["authToken"]}));
  }, [user]);
  
  return (
    <div className="acc">
      <table className="acc-tbl">
        <thead className="acc-thead">
            <tr className='acc-tbl-head'>
                <th>Username</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Seller</th>
                <th>Blogger</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {Object.keys(users).map((account, i) => (
                <tr key={i}>
                    <td data-title="Username" className='acc-td'>{users[account]["username"]}</td>
                    <td data-title="Email" className='acc-td'>{users[account]["email"]}</td>
                    <td data-title="Admin" className='acc-td'>{(users[account]["admin"] ? "Yes" : "No")}</td>
                    <td data-title="Seller" className='acc-td'>{(users[account]["seller"] ? "Yes" : "No")}</td>
                    <td data-title="Blogger" className='acc-td'>{(users[account]["blogger"] ? "Yes" : "No")}</td>
                    <td data-title="Delete" className='acc-td'>
                        {(user["user"]["_id"] !== users[account]['_id']) &&<button className='acc-btn-delete' onClick={() => 
                          dispatch(deleteAsyncSomeUser({authToken : user["authToken"], id : users[account]['_id']}))
                          }><span className="material-symbols-outlined">
                          close
                          </span></button>}
                    </td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};