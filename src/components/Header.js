import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        <h1>NC News</h1>
      </Link>
      <Login className={styles.login}></Login>
      <Nav className={styles.nav}></Nav>
    </div>
  );
};

export default Header;
