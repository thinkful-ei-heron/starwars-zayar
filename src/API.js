
const url = 'https://swapi.co/api'

async function search(type, query) {
  let data = await fetch(`${url}/${type}/?search=${query}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
  return data
}

export default search
