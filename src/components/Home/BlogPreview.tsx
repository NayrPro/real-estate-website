import { Link } from 'react-router-dom';
import './BlogPreview.scss';
import { BlogArray } from './models/BlogModel';

type Props = {
  posts: BlogArray[];
};

export const BlogPreview: React.FC<Props> = ({ posts }) => {
  return (
    <section className="blog-preview-section">
      <h2 className="blog-preview-section__title">Latest Blog Posts</h2>
      <div className="blog-preview-section__posts">
        {posts.slice(0, 3).map((post, index) => (
          <div 
            className="blog-preview-card" 
            key={index}
            style={{backgroundImage: 'url('+post.image+'})'}}
          >
            <h3 className="blog-preview-card__title">{post.title}</h3>
            <p className="blog-preview-card__description">{post.body}</p>
            <Link to={`/blog/${post._id}`} className="blog-preview-card__link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
