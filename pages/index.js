import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import React from "react";
import Sidebar from "../components/sidebar"; 
import About from "../components/about";
import PostsCards from "../components/postsCards"; 

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
        <PostsCards posts={allPostsData} /> {/* Usar PostsCards */}
        <About />
      </Layout>
    </>
  );
}
