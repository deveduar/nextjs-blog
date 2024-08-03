// components/PostsCards.js
import React from "react";
import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";
import styles from "./postsCards.module.css";

const PostsCards = ({ posts }) => {
  return (
    <section className={styles.container}>
      <h2 className={utilStyles.headingLg}>Last Posts:</h2>
      <ul className={utilStyles.list}>
        {posts.map(({ id, date, title, tags }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <div className={utilStyles.lightText}>
              Tags:{" "}
              {tags.map((tag, index) => (
                <React.Fragment key={tag}>
                  {index > 0 && <span className={utilStyles.separator}>, </span>}
                  <Link className={utilStyles.tag} key={tag} href={`/tags/${tag}`}>
                    #{tag}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostsCards;
