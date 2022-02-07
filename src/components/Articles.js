import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <section>
      {articles.map((article) => {
        return (
          <article key={article.article_id}>
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
