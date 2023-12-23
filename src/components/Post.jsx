import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {

  const {deletePost} =  useContext(PostListContext)

  return (
    <>
      <div className="card post-card" style={{ width: "24rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span onClick={()=> deletePost(post.id)} className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete />
            </span>
          </h5>
          <p className="userId">user-{post.userId}</p>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary mx-1">{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
