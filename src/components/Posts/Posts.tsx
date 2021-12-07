import Post from "../Post/Post";
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Posts = (): JSX.Element => {
    const { posts } = useTypedSelector(state => state.posts)
    return (
        posts && posts.length > 0 ?
            <>{posts.map(post => <Post post={post} key={post.id} />)}</>
            :
            <p>No posts yet</p>
    )
}

export default Posts