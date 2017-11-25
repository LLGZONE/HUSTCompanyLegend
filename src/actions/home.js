import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const FEATURE = createRequestTypes('FEATURE')
const ANNOUNCEMENT = createRequestTypes('ANNOUNCEMENT')
const MEMBERS = createRequestTypes('MEMBERS')
const ACADEMY_ACHIEVEMENT = createRequestTypes('ACADEMY_ACHIEVEMENT')
const LEAGUE_ACHIEVEMENT = createRequestTypes('LEAGUE_ACHIEVEMENT')
const WORK_CHANCE = createRequestTypes('WORK_CHANCE')
const EXPERTS = createRequestTypes('EXPERTS')
const RECOMMEND_TALENTS = createRequestTypes('RECOMMEND_TALENTS')

const feature = {
  request: feature => action(FEATURE[REQUEST], {feature}),
  success: response => action(FEATURE[SUCCESS], {response}),
  failure: error => action(FEATURE[FAILURE], {error}),
}


const announcement = {
  request: announcement => action(ANNOUNCEMENT[REQUEST], {announcement}),
  success: response => action(ANNOUNCEMENT[SUCCESS], {response}),
  failure: error => action(ANNOUNCEMENT[FAILURE], {error})
}

const member = {
  request:
}