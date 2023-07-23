import { PostCard } from './PostCard'; 
import "./Blog.scss"; 
import { RootState } from '../../Store/store';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { useEffect } from 'react';
import { getAsyncPosts } from '../../Store/reducers/blogReducer';


export const Blog: React.FC = () => {
  const dispatch = useAppDispatch()
  const blogposts = useAppSelector((state : RootState) => state.posts.values);

  useEffect(() => {
    dispatch(getAsyncPosts({}))
  }, [])

  return (
    <div className="post-list">
      <PostCard posts={blogposts} />
    </div>
  );
};
