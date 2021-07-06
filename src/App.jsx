import React, { useEffect } from "react";
import { getPosts } from "./redux/postsSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts.posts);
  return (
    <div>
      <p>test</p>
      {posts.map((post) => (
        <p>{post.postTitle}</p>
      ))}
    </div>
  );
}

export default App;
