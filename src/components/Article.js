import { getArticleById, getCommentsByArticleId } from "../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { patchVotesByArticleId } from "../utils/api";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { article_id } = useParams();
  const [votes, setVotes] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setVotes(article.votes);
    });
  }, [article_id]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [article_id]);

  //mutate state arr

  const handleVotesClick = () => {
    setVotes((currVotes) => {
      return currVotes + 1;
    });
    patchVotesByArticleId(article_id).then((res) => {});
  };

  const handleBackClick = () => {
    return navigate(-1);
  };

  //comment different component

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <section>
      <button onClick={() => handleBackClick()}>Back to articles</button>
      <article>
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <p>{article.body}</p>
        <p>
          Votes: {votes}{" "}
          <button onClick={() => handleVotesClick()}>Vote</button>
        </p>
        <p>Created at {article.created_at}</p>
      </article>
      <section>
        <h2>Comments</h2>
        {comments.map((comment) => {
          return (
            <article key={comment.comment_id}>
              d <h2>{comment.author}</h2>
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
