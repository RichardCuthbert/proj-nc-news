import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = (err) => {
  const navigate = useNavigate();

  //nav forward

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{err.err.status}</h1>
      <p>{err.err.data.msg}</p>
    </div>
  );
};

export default ErrorPage;
