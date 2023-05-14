interface PostCardProps {
  title: string;
  date: string;
}

export const PostCard: React.FC<PostCardProps> = ({ title, date }) => {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{date}</p>
      <a href="#">Read more</a>
    </div>
  );
};
