import React, { useState } from "react";
import "./NewPost.css";
import axios from "axios";
const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || author === "" || content === "") return;
    let newPost = { title, content, author };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios.post("/new", newPost, axiosConfig);
  };
  return (
    <form className="new-post-form">
      <label htmlFor="title" className="new-lbl">
        Title
      </label>
      <input
        type="text"
        className="new-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="author" className="new-lbl">
        Author
      </label>
      <input
        type="text"
        className="new-input"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="content" className="new-lbl">
        Post content
      </label>
      <textarea
        width="50px"
        className="new-input new-textarea"
        style={{ resize: "none" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit" className="btn-new" onClick={handleSubmit}>
        Make Post
      </button>
    </form>
  );
};

export default NewPost;
