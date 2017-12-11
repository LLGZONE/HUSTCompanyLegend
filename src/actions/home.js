import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

export const FEATURE = createRequestTypes('FEATURE')
export const ANNOUNCEMENT = createRequestTypes('ANNOUNCEMENT')
export const MEMBERS = createRequestTypes('MEMBERS')
export const ACADEMY_ACHIEVEMENT = createRequestTypes('ACADEMY_ACHIEVEMENT')
export const LEAGUE_ACHIEVEMENT = createRequestTypes('LEAGUE_ACHIEVEMENT')
export const WORK_CHANCE = createRequestTypes('WORK_CHANCE')
export const EXPERTS = createRequestTypes('EXPERTS')
export const RECOMMEND_TALENTS = createRequestTypes('RECOMMEND_TALENTS')
export const FOOTER_LATEST = createRequestTypes('FOOTER_LATEST')

export const feature = {
  request: feature => action(FEATURE[REQUEST], {feature}),
  success: response => action(FEATURE[SUCCESS], {response}),
  failure: error => action(FEATURE[FAILURE], {error}),
}

export const announcement = {
  request: announcement => action(ANNOUNCEMENT[REQUEST], {announcement}),
  success: response => action(ANNOUNCEMENT[SUCCESS], {response}),
  failure: error => action(ANNOUNCEMENT[FAILURE], {error}),
}

export const members = {
  request: members => action(MEMBERS[REQUEST], {members}),
  success: response => action(MEMBERS[SUCCESS], {response}),
  failure: error => action(MEMBERS(FAILURE), {error}),
}

export const academyAchievement = {
  request: ac => action(ACADEMY_ACHIEVEMENT[REQUEST], {ac}),
  success: response => action(ACADEMY_ACHIEVEMENT[SUCCESS], {response}),
  failure: error => action(ACADEMY_ACHIEVEMENT[FAILURE], {error}),
}

export const leagueAchievement = {
  request: la => action(LEAGUE_ACHIEVEMENT[REQUEST], {la}),
  success: response => action(LEAGUE_ACHIEVEMENT[SUCCESS], {response}),
  failure: error => action(LEAGUE_ACHIEVEMENT[FAILURE], {error}),
}

export const workChance = {
  request: wc => action(WORK_CHANCE[REQUEST], {wc}),
  success: response => action(WORK_CHANCE[SUCCESS], {response}),
  failure: error => action(WORK_CHANCE[FAILURE], {error})
}

export const experts = {
  request: experts => action(EXPERTS[REQUEST], {experts}),
  success: response => action(EXPERTS[SUCCESS], {response}),
  failure: error => action(EXPERTS[FAILURE], {error})
}

export const recommendTalents = {
  request: rt => action(RECOMMEND_TALENTS[REQUEST], {rt}),
  success: response => action(RECOMMEND_TALENTS[SUCCESS], {response}),
  failure: error => action(RECOMMEND_TALENTS[FAILURE], {error}),
}

export const footerLatest = {
  request: fl => action(FOOTER_LATEST[REQUEST], {fl}),
  success: response => action(FOOTER_LATEST[SUCCESS], {response}),
  failure: error => action(FOOTER_LATEST[FAILURE], {error}),
}