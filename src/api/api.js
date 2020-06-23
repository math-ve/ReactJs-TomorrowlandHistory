const readAll = () => {
    return fetch('/.netlify/functions/all_editions').then((response) => {
      return response.json()
    })
  }

export default {
    readAll : readAll
}