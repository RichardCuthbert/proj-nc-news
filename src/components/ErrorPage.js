import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = (err) => {
  const navigate = useNavigate();

  if (Object.keys(err).length > 0) {
    return (
      <div className={styles.container}>
        <h1>{err.err.status}</h1>
        <p>{err.err.data.msg}</p>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <h1>Incorrect path</h1>
    </div>
  );
};

export default ErrorPage;
