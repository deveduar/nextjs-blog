import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import React from "react";
import Sidebar from "../../components/sidebar";
import { getSortedPostsData } from "../../lib/posts";


export default function Post({ postData, allPostsData }) {
  const currentPostId = postData.id;
  const contentHtmlWithBlankTarget = postData.contentHtml.replace(
    /<a(.*?)>/g,
    '<a$1 target="_blank">'
  );
  return (
    <>
      <Sidebar posts={allPostsData} currentPostId={currentPostId} />
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div className={utilStyles.lightText}>
            Tags:{" "}
            {postData.tags.map((tag, index) => (
              <React.Fragment key={tag}>
                {index > 0 && <span className={utilStyles.separator}>, </span>}
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

          <div
            dangerouslySetInnerHTML={{ __html: contentHtmlWithBlankTarget }}
          />
        </article>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}
