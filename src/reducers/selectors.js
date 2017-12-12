export const getUserInfo = state => {
  const {username, password} = state.reducer.user

  return {
    username,
    password,
  }
}