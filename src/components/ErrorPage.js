import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  //nav forward

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>Page not found</p>
    </div>
  );
};

export default ErrorPage;
