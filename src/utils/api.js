import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://richard-nc-news-backend.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic_slug) => {
  return newsApi.get("/articles").then((res) => {
    if (topic_slug) {
      return res.data.articles.filter((article, index) => {
        if (article.topic === topic_slug) {
          return article;
        }
      });
    }
    return res.data.articles;
  });
};
