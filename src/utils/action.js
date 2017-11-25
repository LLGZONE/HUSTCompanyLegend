function action(type, payload, more) {
  return {type, ...payload, ...more}
}

export default action