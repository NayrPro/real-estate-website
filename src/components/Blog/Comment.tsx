import { CommentsModel } from "./CommentsModel";
import './Comment.scss'
import { useAppSelector } from "../../Store/hooks";
import { RootState } from "../../Store/store";
import { useState } from "react";
import { EditComment } from "./EditComment";

type Props = {
    comments: CommentsModel;
  };

export const Comment: React.FC<Props>  = ({comments}) => {

  const user = useAppSelector((state : RootState) => state.user.value);
  const [edit, setEdit] = useState<string>("");

  return (
    <div className="comment-content">
      <h4>{comments.author_name}</h4>
      <p className="comment__body">Posted on {comments.date}{comments.updated_date !== undefined && <span className="comment__update">, Modified on {comments.updated_date}
        </span>}  
      </p>        
      { 
        edit == "" ?
        <p className="comment__date"> {comments.body}</p> 
        : 
        <EditComment id={comments["_id"]} body={comments.body}/>
      }
      {
        (comments.author_name == user.user.username && edit == "") &&
        <div className="comment-btn-container">
            <button className="comment-btn" onClick={() => setEdit("edit")}>Edit</button>        
        </div>
      }
    </div>
  );
}