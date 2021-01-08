import React, { useState } from "react";
import "./NewPost.css";
const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const tetst = { title, content, author };
    console.log(tetst);
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
