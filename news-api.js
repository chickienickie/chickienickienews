export const getArticles = async () => {
  return fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-11&sortBy=publishedAt&apiKey=aa65ffe8949c42feabb396f5a3773559`)
}