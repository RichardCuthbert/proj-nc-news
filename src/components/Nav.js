import styles from "./Nav.module.css";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  //description when hovering

  return (
    <nav className={styles.container}>
      {topics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
