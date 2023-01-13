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
    return res.data;
  });
};

export const fetchTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data;
  });
};

export const fetchPopularArticles = () => {
  return fetchTopics()
  .then((data) => {
    const pop = data.topics.map((topic) => {
      return newsApi
        .get(`/articles?topic=${topic.slug}&sort_by=votes`)
    });
    return Promise.all(pop)
  })
  .then((res) => {
    const popularArticles =  []
    for(let i = 0; i < res.length; i++) {
      popularArticles.push(res[i].data.articles[0])
    }
    return popularArticles
  })
};

export const patchArticleVotes = (articleId, voteUpdate) => {
  return newsApi.patch(`/articles/${articleId}`, voteUpdate).then((res) => {return res.data})
}

export const fetchArticleComments = (articleId) => {
  return newsApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data
  })
}

export const fetchUsers = () => {
  return newsApi.get(`/users`).then((res) => {
    return res.data
  })
}

export const postComment = (articleId, newComment) => {
  return newsApi.post(`/articles/${articleId}/comments`, newComment).then(({}) => {
    
  })
}

