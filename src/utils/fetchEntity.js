export default function fetchEntity(url, header) {
  return fetch(url, header)
    .then(response => response.json())
    .then(json => ({response: json}))
}