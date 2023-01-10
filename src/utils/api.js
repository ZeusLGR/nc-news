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

export const fetchPopularCodingArticles = () => {
  return newsApi.get(`/articles?topic=coding&sort_by=votes`).then((res) => {
    return res.data
  })
}

export const fetchPopularFootballArticles = () => {
  return newsApi.get(`/articles?topic=football&sort_by=votes`).then((res) => {
    return res.data
  })
}

export const fetchPopularCookingArticles = () => {
  return newsApi.get(`/articles?topic=cooking&sort_by=votes`).then((res) => {
    return res.data
  })
}