import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    return navigate("/");
  };
  return <button onClick={() => handleBackClick()}>Back to articles</button>;
};

export default BackButton;
