import './Accounts.scss'; 
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';
import { deleteAsyncPost, getAsyncPosts } from '../../../Store/reducers/blogReducer';
import { Link } from 'react-router-dom';


export const Articles = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const articles = useAppSelector((state : RootState) => state.posts.values);
  const [change, setChange] = useState<number>(0);

  useEffect(() => {
    dispatch(getAsyncPosts({}));
  }, [change]);
  
  return (
    <div className="acc">
      <table className="acc-tbl">
        <thead className="acc-thead">
            <tr className='acc-tbl-head'>
                <th>Title</th>
                <th>Author_username</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {Object.keys(articles).map((article, i) => (
                <tr key={i}>
                    <td data-title="Title" className='acc-td'>
                    <Link to={`/blog/${articles[article]["_id"]}`}>
                      {articles[article]["title"]}
                    </Link>
                    </td>
                    <td data-title="Author_username" className='acc-td'>{articles[article]["author_username"]}</td>
                    <td data-title="Date" className='acc-td'>{articles[article]["date"]}</td>
                    <td data-title="Delete" className='acc-td'>
                        <button className='acc-btn-delete' onClick={() =>{
                          dispatch(deleteAsyncPost({authToken : user["authToken"], id : articles[article]['_id']}));
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