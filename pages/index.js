import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import PostsCards from "../components/postsCards"; 
import About from "../components/about";

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
    <Layout home allPostsData={allPostsData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div >
        <PostsCards posts={allPostsData} />
        <About />
      </div>
    </Layout>
  );
}
