import React from "react";

const PostFeed = ({ posts }) => {
  console.log(posts);

  return (
    <>
      {posts.map((post) => {
        const { author, title, content } = post;
        return (
          <section className="post">
            <header className="post-title">{title}</header>
            <div className="post-author">{author}</div>
            <div className="post-content">{content}</div>
            <div className="post-actions">LIKE COMMENT</div>
          </section>
        );
      })}
    </>
  );
};

export default PostFeed;
