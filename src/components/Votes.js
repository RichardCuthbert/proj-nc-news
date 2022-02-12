import { patchVotesByArticleId } from "../utils/api";

const Votes = (props) => {
  const { votes, setVotes, article_id } = props;
  const handleVotesClick = () => {
    setVotes((currVotes) => {
      return currVotes + 1;
    });
    patchVotesByArticleId(article_id).then((res) => {});
  };

  return (
    <p>
      Votes: {votes} <button onClick={() => handleVotesClick()}>Vote</button>
    </p>
  );
};

export default Votes;
