import styles from "./Nav.module.css";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

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
        return <span key={topic.slug}>{topic.slug}</span>;
      })}
    </nav>
  );
};

export default Nav;
