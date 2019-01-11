import { getArticles } from './news-api.js'

window.addEventListener('load', async e => {
  const articles = await getArticles().then(res => res.json())
  console.log(articles)
})