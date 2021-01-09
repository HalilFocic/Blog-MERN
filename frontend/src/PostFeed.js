import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const inverseArray = (posts) => {
  let temp = [];
  for (let i = posts.length - 1; i >= 0; i--) temp.push(posts[i]);
  return temp;
};
const PostFeed = ({ posts }) => {
  console.log(posts);
  const arrangedPosts = inverseArray(posts);
  return (
    <>
      {arrangedPosts.map((post) => {
        const { author, title, content } = post;
        return (
          <section className="post" key={post._id}>
            <header className="post-title">
              {title}
              <Link to={`/post/${post._id}`}>
                <AiOutlinePlus className="plus" />
              </Link>
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
