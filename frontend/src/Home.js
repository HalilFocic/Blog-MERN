import React, { useEffect, useState } from "react";
import "./index.css";
import NavBar from "./NavBar";
import "./home.css";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="about-project">
        <div className="about-title">
          <h1>Welcome to Super Hero Blog site</h1>
        </div>
        <div className="about-header">
          <h2>Posts page</h2>
          <p className="about-text">
            On post page you will be able to see posts and interract with them
          </p>
          <button className="about-btn">Visit Page</button>
        </div>
        <div className="about-header">
          <h2>Hero info page</h2>
          <p className="about-text">
            On this page you will be able to search for your hero and site will
            give you basic information e.g height,powers
          </p>
          <button className="about-btn">Visit Page</button>
        </div>
        <div className="about-header">
          <h2>Contact me page</h2>
          <p className="about-text">
            This page is used to contact author via email or social medias
          </p>
          <button className="about-btn">Visit Page</button>
        </div>
      </div>
    </>
  );
};

export default Home;

// const Home = () => {
//   const [posts, setPosts] = useState([]);

//   const fetchPosts = async () => {
//     const response = await fetch("/posts");
//     const newPosts = await response.json();
//     setPosts(newPosts);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);
//   return (
//     <>
//       {posts.map((post) => {
//         return <Post key={post._id} {...post} />;
//       })}
//     </>
//   );
// };
