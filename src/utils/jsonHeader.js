function jsonHeader(json) {
  return {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export default jsonHeader