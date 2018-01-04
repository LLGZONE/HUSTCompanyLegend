export const getUserInfo = state => {
  const { username, password, type } = state.reducers.user

  return {
    username,
    password,
    type,
  }
}

export const isLogin = state => {
  const { isLogin: login } = state.reducers.user

  return login
}

export const getPostsQuery = state => state.reducers.exercitation.postsQuery

export const getUid = state => state.reducers.user.uid

export const getPageList = (type, page) => state => {
  const item = state.reducers.pagination[type]

  if (item) {
    return item.page[page] || []
  }

  return []
}