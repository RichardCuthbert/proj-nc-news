import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import styles from "./Articles.module.css";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");

  const optionsToSortBy = [
    {
      label: "Date created",
      value: "created_at",
    },
    {
      label: "Comment count",
      value: "comment_count",
    },
    {
      label: "Votes",
      value: "votes",
    },
  ];

  const { topic_slug } = useParams();

  useEffect(() => {
    getArticles(topic_slug, sortBy).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setLoading(false);
    });
  }, [topic_slug, sortBy]);

  if (isLoading) {
    return <p className={styles.loading}>...loading</p>;
  }

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <section className={styles.container}>
      <Header></Header>
      <div>
        <label>
          Sort by{" "}
          <select defaultValue="created_at" onChange={(e) => handleSortBy(e)}>
            {optionsToSortBy.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </label>
      </div>
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
