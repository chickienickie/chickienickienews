import { getArticles } from './news-api.js'

window.addEventListener('load', async e => {
  const articles = await getArticles().then(res => res.json())
  // const articles_found_number = articles.totalResults
  const articles_found_number = document.querySelector("#articles_found_number")
  articles_found_number.innerHTML = articles.totalResults
  console.log(articles_found_number)

})

