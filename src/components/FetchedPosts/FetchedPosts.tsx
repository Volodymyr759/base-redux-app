// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchPosts } from "../../store/posts/actions";

import Loader from "../Loader/Loader";
import Post from "../Post/Post";

export const FetchedPosts: React.FC = () => {
    const { app, posts } = useTypedSelector(state => state)
    const dispatch = useDispatch();
    
    // also usefull throw useEffect, not only clicking button:
    // useEffect(() => {
    //     dispatch(fetchPosts())
    // }, [dispatch])

    if (app.loading) {
        return <Loader />
    }

    if (!posts.fetchedPosts.length) {
        return (
            <button
                className="btn btn-primary"
                onClick={() => dispatch(fetchPosts())}
            >
                Load
            </button>
        )
    }
    return (
        <>
            {posts.fetchedPosts.map(post => <Post post={post} key={post.id} />)}
        </>
    )
}


