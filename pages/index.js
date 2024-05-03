import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import React from "react";
import Sidebar from "../components/sidebar"; 


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Sidebar posts={allPostsData} />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Welcome to my personal blog! 👋 Here, I'll be sharing my passion for
            technology, productivity, and web development. Join me as we explore
            my projects, technology insights, and tips for boosting productivity
            🚀.
          </p>
          <p>
            You can contact me on{" "}
            <a href="http://www.linkedin.com/in/deveduar" target="_blank">
              Linkedin{" "}
            </a>
            or see my activity{" "}
            <a href="https://github.com/deveduar" target="_blank">
              Github
            </a>
            .
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Posts:</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, tags }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}> {title} </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                <div className={utilStyles.lightText}>
                  Tags:{" "}
                  {tags.map((tag, index) => (
                    <React.Fragment key={tag}>
                      {index > 0 && (
                        <span className={utilStyles.separator}>, </span>
                      )}
                      <Link
                        className={utilStyles.tag}
                        key={tag}
                        href={`/tags/${tag}`}
                      >
                        {/* {index > 0 && ", "} */}#{tag}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
