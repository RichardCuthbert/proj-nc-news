import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Article.module.css";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import Votes from "./Votes";
import Comments from "./Comments";
import BackButton from "./BackButton";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { article_id } = useParams();
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setVotes(article.votes);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [article_id]);

  if (err) {
    return <ErrorPage err={err}></ErrorPage>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <section>
      <BackButton></BackButton>
      <Login></Login>
      <article className={styles.article}>
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <p>{article.body}</p>
        <Votes
          votes={votes}
          setVotes={setVotes}
          article_id={article_id}
        ></Votes>
        <p>Created at {article.created_at}</p>
      </article>
      <Comments article_id={article_id}></Comments>
    </section>
  );
};

export default Article;
