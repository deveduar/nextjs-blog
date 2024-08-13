import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Footer from "./footer";
import Sidebar from "./sidebar";

const name = "@deveduar blog";
export const siteTitle = "deveduar blog";

export default function Layout({ children, home, allPostsData, currentPostId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns((prev) =>
      prev.includes(dropdownId)
        ? prev.filter((id) => id !== dropdownId)
        : [...prev, dropdownId]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    // console.log('Sidebar isOpen:', isOpen);
    if (isOpen) {
      document.body.classList.add(styles.contentShift);
    } else {
      document.body.classList.remove(styles.contentShift);
    }
  }, [isOpen]);

  return (
    <>
      <Sidebar
        posts={allPostsData}
        currentPostId={currentPostId}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        openDropdowns={openDropdowns}
        toggleDropdown={toggleDropdown}
        sidebarRef={sidebarRef}
      />
      <div className={`${styles.containerPostPage}`}>
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
        <div >
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
