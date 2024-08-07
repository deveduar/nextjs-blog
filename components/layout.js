import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React from "react";
import Footer from "./footer";


const name = "@deveduar blog";
export const siteTitle = "deveduar blog";

// export default function Layout({ children }) {
//   return <div className={styles.container}>{children}</div>;
// }

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.containerPostPage}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Personal website using Next.js" />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={`${styles.header} ${home ? styles.home : ""}`}>
          {home ? (
            <>
              {/* <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={180}
                width={180}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
              <div className={styles.profileContainer}>
                <Link href="/">
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={`${utilStyles.borderCircle} ${styles.profileImage}`}
                    height={30}
                    width={30}
                    alt=""
                  />
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/" className={utilStyles.colorInherit}>
                    {name}
                  </Link>
                </h2>
              </div>
            </>

          ) : (
            <>
              <div className={styles.profileContainer}>
                <Link href="/">
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={`${utilStyles.borderCircle} ${styles.profileImage}`}
                    height={30}
                    width={30}
                    alt=""
                  />
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/" className={utilStyles.colorInherit}>
                    {name}
                  </Link>
                </h2>
              </div>
            </>
          )}
        </header>
        <div  className={styles.containerPost}>
        <main >{children}</main>
        {!home && (

        <>
        <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
        </div>
        </>
        )}
        </div>
      </div>
      <Footer></Footer>

    </>
  );
}
