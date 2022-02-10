import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <Login></Login>
    </div>
  );
};

export default Header;
