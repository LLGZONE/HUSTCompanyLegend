export default function fetchEntity(url, header) {
  return fetch(url, header)
    .then(response => ({response: response.json()}))
    .catch(error => ({error}))
}