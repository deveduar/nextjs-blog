import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

const Sidebar = ({
  posts,
  currentPostId,
  isOpen,
  toggleSidebar,
  openDropdowns,
  toggleDropdown,
  sidebarRef, // Recibir sidebarRef como prop
}) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add(styles.contentShift);
  //   } else {
  //     document.body.classList.remove(styles.contentShift);
  //   }
  // }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
    >
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        ☰
      </button>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.heading} onClick={() => toggleDropdown(1)}>
            Posts
          </h2>
          <ul
            className={`${styles.dropdown} ${
              openDropdowns.includes(1) ? styles.open : ""
            }`}
          >
            {posts.map((post) => (
              <li key={post.id} className={styles.dropdownItem}>
                <Link
                  className={`${styles.dropdownLink} ${
                    post.id === currentPostId ? styles.active : ""
                  }`}
                  href={`/posts/${post.id}`}
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.heading} onClick={() => toggleDropdown(2)}>
            Labels
          </h2>
          <ul
            className={`${styles.dropdown} ${
              openDropdowns.includes(2) ? styles.open : ""
            }`}
          >
            <li className={styles.dropdownItem}>
              <Link className={styles.dropdownLink} href="/category1">
                Category 1
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link className={styles.dropdownLink} href="/category2">
                Category 2
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
