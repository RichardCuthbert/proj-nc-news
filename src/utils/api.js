import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://richard-nc-news-backend.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic_slug, sortBy) => {
  return newsApi
    .get("/articles", {
      params: { topic: topic_slug, sort_by: sortBy },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchVotesByArticleId = (article_id) => {
  return newsApi
    .patch(`articles/${article_id}`, {
      inc_votes: 1,
    })
    .then((res) => {
      console.log(res);
    });
};
