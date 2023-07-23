import { Link } from "react-router-dom";
import { BlogArray } from "../Home/models/BlogModel";
import "./PostCard.scss";
import { RootState } from "../../Store/store";
import { useAppSelector } from "../../Store/hooks";

type Props = {
  posts: BlogArray[];
};

export const PostCard: React.FC<Props> = ({ posts }) => {

  const user = useAppSelector((state : RootState) => state.user.value);

  return (
    <section className="blog-section">
      <div className="post-new-article">
        { 
          (Object.keys(user).length > 1 && (user.user.blogger || user.user.admin)) &&
          <button>
            <Link to="/blog/article">New Article</Link>
          </button>
        }
      </div>
    <h2 className="blog-section__title"></h2>
    <div className="blog-section__posts">
      {posts.map((post, index) => (
        <div 
          className="blog-card" 
          key={index}
        >
          <div className="blog-card-image" style={{backgroundImage: 'url('+post.image+'})'}}></div>
          <div className="blog-card-content">
            <div className="blog-card-header"><h3 className="blog-card__title">{post.title}</h3><span>author : {post.author_username}</span></div>
            <p className="blog-card__date"><span style={{display: 'block'}}>{post.date}</span></p>
            <p className="blog-card__description">{post.body}</p>
            <Link to={`/blog/${post._id}`} className="blog-card__link">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};
