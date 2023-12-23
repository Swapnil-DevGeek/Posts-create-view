import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {

  const {addPost} = useContext(PostListContext)

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event)=> {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    addPost(userId,title,body,tags);
    toast.success('Post added successfully.', {
      position: "top-center"
    })

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    tagsElement.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="mb-3">
          <label htmlfor="title"  class="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={titleElement}
            class="form-control create-post"
            id="title"
            placeholder="How are u feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlfor="userId"  class="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            ref={userIdElement}
            class="form-control create-post"
            id="userId"
            placeholder="Your User ID"
          />
        </div>
        <div class="mb-3">
          <label htmlfor="body"  class="form-label">
            Post Content
          </label>
          <textarea rows='4'
            type="text"
            ref={bodyElement}
            class="form-control create-post "
            id="body"
            placeholder="Tell us more about  it"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="tags"  class="form-label">
            Enter your tags here
          </label>
          <input
            type="text"
            ref={tagsElement}
            class="form-control create-post"
            id="tags"
            placeholder="Please enter your tags using space"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
