import { useContext } from "react";
import { LoginContext } from "../contexts/Login";
import { getUserByUsername } from "../utils/api";
import styles from "./Login.module.css";

const Login = () => {
  const { user, setUser } = useContext(LoginContext);

  //input username

  const toggleLogin = () => {
    getUserByUsername("jessjelly").then((userFromApi) => {
      user ? setUser("") : setUser(userFromApi.username);
    });
  };

  //login page

  return (
    <div className={styles.container}>
      <div>{user}</div>
      <button onClick={toggleLogin}>{user ? "Log out" : "Log in"}</button>
    </div>
  );
};

export default Login;
