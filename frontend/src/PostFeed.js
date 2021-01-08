import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const PostFeed = ({ posts }) => {
  console.log(posts);

  return (
    <>
      {posts.map((post) => {
        const { author, title, content } = post;
        return (
          <section className="post">
            <header className="post-title">
              {title}
              <AiOutlinePlus className="plus" />
            </header>
            <div className="post-author">{author}</div>
            <div className="post-content">{content}</div>
          </section>
        );
      })}
    </>
  );
};

export default PostFeed;
