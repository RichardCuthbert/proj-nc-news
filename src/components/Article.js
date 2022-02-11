import { getArticleById, getCommentsByArticleId } from "../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { patchVotesByArticleId } from "../utils/api";
import { useContext } from "react";
import { LoginContext } from "../contexts/Login";
import { postComment } from "../utils/api";
import styles from "./Article.module.css";
import { deleteCommentById } from "../utils/api";
import ErrorPage from "./ErrorPage";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { article_id } = useParams();
  const [votes, setVotes] = useState(0);
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginContext);
  const [comment, setComment] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setVotes(article.votes);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [article_id]); //err?

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [article_id, comments]);

  //mutate state arr

  const handleVotesClick = () => {
    setVotes((currVotes) => {
      return currVotes + 1;
    });
    patchVotesByArticleId(article_id).then((res) => {});
  };

  //go forwards instead

  const handleBackClick = () => {
    return navigate("/");
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmission = (e) => {
    e.preventDefault();
    if (user) {
      postComment(comment, user, article_id).then((returnedComment) => {
        setComments((currComments) => {
          return [returnedComment, ...currComments];
        });
      });
      setComment("");
    }
  };

  const handleDeleteComment = (author, commentId) => {
    if (user === author) {
      deleteCommentById(commentId);
    }
  };

  //comment different component

  if (err) {
    return <ErrorPage err={err}></ErrorPage>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <section>
      <button onClick={() => handleBackClick()}>Back to articles</button>
      <article className={styles.article}>
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
        <form onSubmit={(e) => handleCommentSubmission(e)}>
          <textarea
            value={comment}
            onChange={(e) => handleCommentChange(e)}
          ></textarea>
          <p className={user ? styles.hidden : styles.show}>
            Please log in to comment
          </p>
          <button>Submit</button>
        </form>
        {comments.map((comment) => {
          return (
            <article key={comment.comment_id}>
              <h2>{comment.author}</h2>
              <p
                className={
                  user === comment.author ? styles.show : styles.hidden
                }
                onClick={() =>
                  handleDeleteComment(comment.author, comment.comment_id)
                }
              >
                delete
              </p>
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
