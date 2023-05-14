import { PostCard } from '../Services/PostCard'; 
import "./Blog.scss"; 

export const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="blog-content">
        <main>
          <h1>Latest Posts</h1>
          <div className="post-list">
            <PostCard title="My First Post" date="2022-01-01" />
            <PostCard title="My Second Post" date="2022-02-15" />
            <PostCard title="My Third Post" date="2022-03-22" />
          </div>
        </main>
      </div>
    </div>
  );
};
