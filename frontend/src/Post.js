import React from "react";
const Post = ({ author, content, hero, title }) => {
  return (
    <div className="post">
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{content}</p>
    </div>
  );
};
export default Post;
