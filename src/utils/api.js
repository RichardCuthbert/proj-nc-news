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
    })
    .catch((err) => {
      throw err.response;
    });
};

export const getArticleById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      throw err.response;
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

export const getUserByUsername = (userName) => {
  return newsApi.get(`/users/${userName}`).then((res) => {
    return res.data.user;
  });
};

export const postComment = (comment, user, article_id) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      body: comment,
      username: user,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteCommentById = (commentId) => {
  return newsApi.delete(`/comments/${commentId}`);
};

//log in stays when refresh page
