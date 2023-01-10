import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-9duf.onrender.com/api",
});

export const fetchArticlesList = () => {
    return newsApi.get(`/articles`).then((res) => {
      return res.data;
    });
  };

export const fetchArticleById = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((res) => {
    return res.data
  })
}  