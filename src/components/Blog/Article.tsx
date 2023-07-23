import React = require("react");
import "./PostCard.scss";
import "./Article.scss";
import { Comment } from "./Comment";
import { PostComment } from "./PostComment";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { RootState } from "../../Store/store";
import { useNavigate, useParams } from "react-router-dom";
import { getAsyncPost } from "../../Store/reducers/blogReducer";
import { useEffect } from "react";
import { getAsyncComment } from "../../Store/reducers/commentReducer";


export const Article: React.FC = () => {

    const comments = useAppSelector((state : RootState) => state.comments.values);
    const dispatch = useAppDispatch();
    const blogpost = useAppSelector((state : RootState) => state.posts.value);
    const blogpostError = useAppSelector((state : RootState) => state.posts.error);
    const params= useParams();
    const user = useAppSelector((state : RootState) => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAsyncPost(params.id));
        dispatch(getAsyncComment({id : params.id, authToken: user["authToken"]}));
        
        (blogpostError !== null && blogpostError !== undefined) && navigate('/');
    }, [blogpostError])

    return (  
        <React.Fragment>
            <div style={{
            paddingBottom: "2rem"
        }}>
                <div className="article-content">
                    <div 
                    className="blog-card-page"
                    >
                    <div className="blog-card-image" style={{backgroundImage: 'url('+blogpost.image+'})'}}></div>
                    <div className="blog-card-content">
                        <div className="blog-card-header"><h3 className="blog-card__title">{blogpost.title}</h3><span>author : {blogpost.author_username}</span></div>
                        <p className="blog-card__date"><span style={{display: 'block'}}>{blogpost.date}</span><span><span className="material-symbols-outlined">
            comment
            </span> {blogpost.commentsNb}</span></p>
                        <p className="blog-card__paragraph">{blogpost.body}</p>
                    </div>
                    </div>
                </div>
                { Object.keys(user).length > 1 && <PostComment id={params.id}/>}
                {
                    Object.keys(user).length > 1 &&
                    comments.map((comment) => (
                        <Comment key={comment["_id"]} comments={comment}/>
                    ))
                }
            </div>
        </React.Fragment>
    );
};
