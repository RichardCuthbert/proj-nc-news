import { useEffect, useState } from "react";
import styles from "./Comments.module.css";
import { getCommentsByArticleId } from "../utils/api";
import { LoginContext } from "../contexts/Login";
import { useContext } from "react";
import { deleteCommentById } from "../utils/api";
import { postComment } from "../utils/api";

const Comments = (props) => {
  const { article_id } = props;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user, setUser } = useContext(LoginContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [article_id, comments]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmission = (e) => {
    e.preventDefault();
    if (user && comment != "") {
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

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
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
        <p
          className={
            user !== "" && comment === "" ? styles.show : styles.hidden
          }
        >
          Write a comment
        </p>
      </form>
      {comments.map((comment) => {
        return (
          <article key={comment.comment_id}>
            <h2>{comment.author}</h2>
            <p
              className={user === comment.author ? styles.show : styles.hidden}
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
  );
};

export default Comments;
