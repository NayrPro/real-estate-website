import { CommentsModel } from "./CommentsModel";
import './Comment.scss'

type Props = {
    comments: CommentsModel;
  };

export const Comment: React.FC<Props>  = ({comments}) => {
  return (
    <div className="comment-content">
      <h4>{comments.author_name}</h4>
      <p className="comment__body">Posted on {comments.date} 
        <span className="comment__update">{comments.updated_date}
        </span>  
      </p>        
      <p className="comment__date"> {comments.body}     
      </p>
      {/* user.id == "" && <div className="comment-btn-container">
          <button className="comment-btn">Edit</button>        
      </div> */}
    </div>
  );
}