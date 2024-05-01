// Sidebar.js

import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

const Sidebar = ({ posts, currentPostId }) => {
  return (
    <div className={styles.sidebar}>
      {/* <h2>Menu</h2> */}
      <ul>
        <li>
          <h2>
            <Link href="/">Home</Link>
          </h2>
        </li>
        {/* <li>
          <Link href="/about">
            About
          </Link>
        </li> */}
        {/* Mostrar los posts como enlaces */}
        {/* <h2>Posts</h2> */}
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className={post.id === currentPostId ? styles.active : ""}
              href={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
