import React from "react";
import Post from "./Post";
const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post._id} {...post} />;
      })}
    </div>
  );
};
export default PostList;
