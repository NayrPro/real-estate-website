import './Accounts.scss'; 
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';
import { getAsyncTransactions } from '../../../Store/reducers/transactionReducer';


export const Transactions = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const transactions = useAppSelector((state : RootState) => state.transactions.transactions);
  const [change, setChange] = useState<number>(0);

  useEffect(() => {
    dispatch(getAsyncTransactions({authToken : user["authToken"]}));
  }, [change]);
  
  return (
    <div className="acc">
      <table className="acc-tbl">
        <thead className="acc-thead">
            <tr className='acc-tbl-head'>
                <th>Propery address</th>
                <th>Buyer</th>
                <th>Price</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
          {Object.keys(transactions).map((transaction, i) => (
                <tr key={i}>
                    <td data-title="Property address" className='acc-td'>{transactions[transaction]["address"]}</td>
                    <td data-title="Buyer" className='acc-td'>{transactions[transaction]["buyer"]}</td>
                    <td data-title="Price" className='acc-td'>${Math.ceil(Number(transactions[transaction]["sale_price"]))}</td>
                    <td data-title="Date" className='acc-td'>{transactions[transaction]["sale_date"]}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 