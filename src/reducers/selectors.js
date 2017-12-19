export const getUserInfo = state => {
  const {username, password} = state.reducers.user

  return {
    username,
    password,
  }
}

export const isLogin = state => {
  const { isLogin: login } = state.reducers.user

  return login
}

export const getPostsQuery = state => state.reducers.exercitation.postsQuery