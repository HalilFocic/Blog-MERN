import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import PostFeed from "./PostFeed";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <div className="home-container">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {" "}
            <PostFeed posts={posts} />
            <button className="new-post-btn">
              <Link
                to="/new"
                style={{ color: "white", textDecoration: "none" }}
              >
                New post
              </Link>
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default Home;
