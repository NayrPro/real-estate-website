import { Link } from 'react-router-dom';
import './BlogPreview.scss';

export type BlogArray = {
  title: string;
  description: string;
};

type Props = {
  posts: BlogArray[];
};

export const BlogPreview: React.FC<Props> = ({ posts }) => {
  return (
    <section className="blog-preview-section">
      <h2 className="blog-preview-section__title">Latest Blog Posts</h2>
      <div className="blog-preview-section__posts">
        {posts.map((post, index) => (
          <div className="blog-preview-card" key={index}>
            <h3 className="blog-preview-card__title">{post.title}</h3>
            <p className="blog-preview-card__description">{post.description}</p>
            <Link to={`/blog/${index}`} className="blog-preview-card__link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
