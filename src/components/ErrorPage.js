import styles from "./ErrorPage.module.css";
import BackButton from "./BackButton";

const ErrorPage = (err) => {
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
      <BackButton></BackButton>
      <h1>Incorrect path</h1>
    </div>
  );
};

export default ErrorPage;
