import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <p>login</p>
    </div>
  );
};

export default Header;
