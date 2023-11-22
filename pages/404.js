import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={utilStyles.container}>
      <h1 className={utilStyles.heading2Xl}>404 - Page Not Found</h1>
      <p className={utilStyles.lightText}>
        Oops! The page you are looking for might be in another castle.
      </p>
      <Link href="/">
        <div className={utilStyles.colorInherit}>Go back home</div>
      </Link>
    </div>
  );
}
