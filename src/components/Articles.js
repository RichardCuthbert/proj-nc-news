import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import styles from "./Articles.module.css";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import ErrorPage from "./ErrorPage";
import SortBy from "./SortBy";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [err, setErr] = useState(null);

  const { topic_slug } = useParams();

  useEffect(() => {
    getArticles(topic_slug, sortBy)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [topic_slug, sortBy]); //err?

  if (err) {
    return <ErrorPage err={err}></ErrorPage>;
  }

  if (isLoading) {
    return <p className={styles.loading}>...loading</p>;
  }

  return (
    <section className={styles.container}>
      <Header></Header>
      <SortBy sortBy={sortBy} setSortBy={setSortBy}></SortBy>
      {articles.map((article) => {
        return (
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            <article className={styles.articleCard}>
              {/* <ul> */}
              <h1>{article.title}</h1>
              <h3>Posted by {article.author}</h3>
              <p>Votes: {article.votes}</p>
              <p>Comments: {article.comment_count}</p>
              {/* </ul> */}
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Articles;
