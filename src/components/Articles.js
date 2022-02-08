import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import styles from "./Articles.module.css";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const { topic_slug } = useParams();

  useEffect(() => {
    getArticles(topic_slug).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic_slug]);

  return (
    <section>
      {articles.map((article) => {
        return (
          <article key={article.article_id} className={styles.container}>
            <ul>
              <li>{article.title}</li>
              <li>{article.author}</li>
              <li>{article.votes}</li>
              <li>{article.comment_count}</li>
            </ul>
          </article>
        );
      })}
    </section>
  );
};

export default Articles;
