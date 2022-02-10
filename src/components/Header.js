import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <Login></Login>
      <Nav></Nav>
    </div>
  );
};

export default Header;
