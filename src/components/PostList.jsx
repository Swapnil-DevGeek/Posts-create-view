import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts?limit=15", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setIsFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="post-list">
      <div>
        {isFetching && (
          <div class="text-center">
            <div class="spinner-border" style={{width:"5rem" , height:"5rem", margin:'80px'}} role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      {!isFetching && postList.length === 0 && (
        <center>
          <h1 className="m-2">No New Posts!!!</h1>
        </center>
      )}
      {!isFetching &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
