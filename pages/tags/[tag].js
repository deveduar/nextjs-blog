import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Sidebar from "../../components/sidebar"; 
import utilStyles from "../../styles/utils.module.css";



export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
  const tags = allPostsData.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  const paths = tags.map((tag) => ({
    params: { tag },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { tag } = params;
  const allPostsData = getSortedPostsData();
  const posts = allPostsData.filter((post) => post.tags.includes(tag));

  return {
    props: {
      tag,
      posts,
      allPostsData,
    },
  };
}

export default function Tag({ tag, posts, allPostsData }) {
  return (
    <>
      <Sidebar posts={allPostsData} />
      <Layout>
        <div className={utilStyles.wrapperTagView}>
        <h1 className={utilStyles.headingLg }>Posts tagged with {tag}</h1>
        <ul >
          {posts.map((post) => (
            <li key={post.id}>
              {/* Enlace al post */}
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        </div>

      </Layout>

    </>
  );
}
