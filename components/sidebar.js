import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

const Sidebar = ({ posts, currentPostId }) => {
    const [isOpen, setIsOpen] = useState(false);    
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          // Si se hace clic fuera del menú, cerrarlo
          setIsOpen(false);
        }
      };
      // Agregar el manejador de eventos de clic al cuerpo del documento
      document.addEventListener("click", handleClickOutside);
      return () => {
        // Limpiar el manejador de eventos al desmontar el componente
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
    
  return (
    <div ref={sidebarRef} className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
    >
      {/* <h2>Menu</h2> */}
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
        <li>
          <h2>
            <Link href="/">Home</Link>
          </h2>
        </li>
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
