import { useSelector } from "react-redux";
import { fetchPosts } from "../../store/posts/actions";
import Loader from "../Loader/Loader";
import Post from "../Post/Post";

const FetchedPosts = () => {
    // @ts-ignore
    const posts = useSelector(state => state.posts.fetchedPosts)
    // @ts-ignore
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return (
            <button
                className="btn btn-primary"
                // @ts-ignore
                onClick={() => dispatch(fetchPosts())}
            >
                Load
            </button>
        )
    }
    // @ts-ignore
    return posts.map(post => <Post post={post} key={post.id} />)
}

export default FetchedPosts
