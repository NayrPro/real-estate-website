import './Accounts.scss'; 
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';
import { deleteAsyncPost, getAsyncPosts } from '../../../Store/reducers/blogReducer';
import { deleteAsyncComment, getAsyncComments } from '../../../Store/reducers/commentReducer';
import { Link } from 'react-router-dom';


export const Comments = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state : RootState) => state.user.value);
  const comments = useAppSelector((state : RootState) => state.comments.values);
  const [change, setChange] = useState<number>(0);

  useEffect(() => {
    dispatch(getAsyncComments({authToken : user["authToken"]}));
  }, [change]);
  
  return (
    <div className="acc">
      <table className="acc-tbl">
        <thead className="acc-thead">
            <tr className='acc-tbl-head'>
                <th>Article title</th>
                <th>Content</th>
                <th>Author</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {Object.keys(comments).map((comment, i) => (
                <tr key={i}>
                    <td data-title="Article title" className='acc-td'>
                    <Link to={`/blog/${comments[comment]["post_id"]}`}>
                      {comments[comment]["title"]}
                    </Link>
                    </td>
                    <td data-title="Content" className='acc-td'>{comments[comment]["body"]}</td>
                    <td data-title="Author" className='acc-td'>{comments[comment]["author_name"]}</td>
                    <td data-title="Date" className='acc-td'>{comments[comment]["date"]}</td>
                    <td data-title="Delete" className='acc-td'>
                        <button className='acc-btn-delete' onClick={() =>{
                          dispatch(deleteAsyncComment({authToken : user["authToken"], id : comments[comment]['_id']}));
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