import { BASE_URL } from '../../../../config/url'
import fetchEntity from '../../../../utils/fetchEntity'
import jsonHeader from '../../../../utils/jsonHeader'

function perfectSTMsg(info) {
  const url = `${BASE_URL}/student/submit`

  return fetchEntity(url, jsonHeader(info))
}

export default perfectSTMsg