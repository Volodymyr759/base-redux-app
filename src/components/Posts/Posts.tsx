import Post from "../Post/Post";
import { connect } from "react-redux";
import { IAppState, IPost } from "../../store/types";
import { Props } from "./types";

const Posts = (props: Props): JSX.Element => {
    if (!props.syncPosts.length) {
        return <p>No posts yet</p>
    }
    return (
        <>
            {props.syncPosts.map(post => <Post post={post} key={post.id} />)}
        </>
    )
}

const mapStateToProps = (state: IAppState): { syncPosts: IPost[] } => {
    return { syncPosts: state.posts.posts }
}

export default connect(mapStateToProps, null)(Posts)