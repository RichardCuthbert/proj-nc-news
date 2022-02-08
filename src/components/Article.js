import { getArticleById, getCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    }, []);

    //mutate state arr
  });

  //comment different component

  return (
    <section>
      <article>
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <p>Created at {article.created_at}</p>
      </article>
      <section>
        <h2>Comments</h2>
        {comments.map((comment) => {
          return (
            <article key={comment.comment_id}>
              <h2>{comment.author}</h2>
              <p>delete</p>
              <p>{comment.body}</p>
              <p>{comment.votes}</p>
              <p>{comment.created_at}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Article;
