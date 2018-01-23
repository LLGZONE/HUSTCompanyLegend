function getToken() {
  const token = localStorage.getItem('tk')

  return token
}

export default getToken