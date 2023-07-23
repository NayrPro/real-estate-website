import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import { RootState } from '../../../../Store/store';
import { useEffect } from 'react';
import { ArtInfo } from './ArtInfo';
import { getAsyncPost } from '../../../../Store/reducers/blogReducer';


export const EditArticle = () => {

  const dispatch = useAppDispatch();
  const article = useAppSelector((state : RootState) => state.posts.value);
  const articleError = useAppSelector((state : RootState) => state.posts.error);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAsyncPost(params.id));
    articleError !== null && navigate('/');
  }, [article['_id']])

  
    return (
        article['_id'] == params.id && <ArtInfo article={article}/>
    );
  };