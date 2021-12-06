import FetchedPosts from "./components/FetchedPosts/FetchedPosts";
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";
import { IPost } from "./store/types";

//1, 2, 3
export default function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm title='' />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Syncronious Posts</h3>
          <Posts syncPosts={[] as IPost[]} />
        </div>
        <div className="col">
          <h3>Asyncronious Posts</h3>
          {/* <FetchedPosts /> */}
        </div>
      </div>
    </div>
  );
}

// export default App;
