import { FetchedPosts } from "./components/FetchedPosts/FetchedPosts";
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";

export default function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Syncronious Posts</h3>
          <Posts />
        </div>
        <div className="col">
          <h3>Asyncronious Posts</h3>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}
