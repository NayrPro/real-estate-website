import { Link } from "react-router-dom";
import { BlogArray } from "../Home/models/BlogModel";
import "./PostCard.scss";

type Props = {
  posts: BlogArray[];
};

export const PostCard: React.FC<Props> = ({ posts }) => {
  return (
    <section className="blog-section">
      <div className="post-new-article">
        <button>
          <Link to="/blog/article">New Article</Link>
        </button>
      </div>
    <h2 className="blog-section__title">Latest Blog Posts</h2>
    <div className="blog-section__posts">
      {posts.map((post, index) => (
        <div 
          className="blog-card" 
          key={index}
        >
          <div className="blog-card-image" style={{backgroundImage: 'url('+post.image+'})'}}></div>
          <div className="blog-card-content">
            <div className="blog-card-header"><h3 className="blog-card__title">{post.title}</h3><span>author : {post.author_username}</span></div>
            <p className="blog-card__date"><span style={{display: 'block'}}>{post.date}</span><span><span className="material-symbols-outlined">
comment
</span> {post.commentsNb}</span></p>
            <p className="blog-card__description">{post.body}</p>
            <Link to={`/blog/${post.id}`} className="blog-card__link">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};
