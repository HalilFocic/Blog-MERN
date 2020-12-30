import React from "react";
import { AiFillLike, AiFillDelete } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./post.css";
const Post = ({ title, author, content, hero }) => {
  return (
    <div className="post-container">
      <div className="post-title-container">
        <div className="post-title">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="post-data-container">
        <div className="post-author">
          by <span className="special">{author}</span>
        </div>
        <div className="post-hero">
          This post is about <span className="special">{hero}</span>
        </div>
        <div className="post-content">{content}</div>
      </div>
      <div className="post-interraction">
        <ul className="interractions">
          <li>
            <AiFillLike />
          </li>
          <li>
            <FaComment />
          </li>
          <li>
            <AiFillDelete />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Post;
