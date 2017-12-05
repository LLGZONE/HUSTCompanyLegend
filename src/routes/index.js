//主页面
export const HOME = '/'
//联盟动态
export const LEAGUE_OVER_VIEW = '/league/overview'
//联盟服务
export const LEAGUE_SERVICE = '/league/service'

/**
 * 实习平台route
 * EXERCITATION      实习平台home页面
 *   &_BASE          实习基地
 *   &_POSTS         实习岗位
 *     &_POSTS_INFO  实习岗位信息
 *     &_POSTS_APPLY 实习岗位注册
 */
export const EXERCITATION = '/exercitation'
export const EXERCITATION_BASE = `${EXERCITATION}/base`
export const EXERCITATION_POSTS = `${EXERCITATION}/posts`
export const EXERCITATION_POSTS_INFO = `${EXERCITATION_POSTS}/info`
export const EXERCITATION_POSTS_APPLY = `${EXERCITATION_POSTS}/apply`
export const EXERCITATION_INSTITUTE = `${EXERCITATION}/institute`
export const EXERCITATION_MODEL = `${EXERCITATION}/model`

//会员中心
export const MEMBER_CENTER = '/member/center'
//会员动态
export const MEMBER_TRENDS = '/member/trends'
//联系我们
export const CONTACT = '/CONTACT'

/**
 * 公司管理平台route
 * COMPANY_MANAGEMENT   主页
 *   &_POSTS_PUBLISH    岗位发布
 *   &_POSTS_MANAGE     岗位管理
 *   &_MSG_PERFECTION   信息完善
 *   &_SIGNUP           注册
 *   &_TRINEE_FILTER    实习生筛选
 */
export const COMPANY_MANAGEMENT = '/management/company'
export const COMPANY_MANAGEMENT_POSTS_PUBLISH = `${COMPANY_MANAGEMENT}/posts/publish`
export const COMPANY_MANAGEMENT_POSTS_MANAGE = `${COMPANY_MANAGEMENT}/posts/manage`
export const COMPANY_MANAGEMENT_MSG_PERFECTION = `${COMPANY_MANAGEMENT}/user/message/perfection`
export const COMPANY_MANAGEMENT_SIGNUP = `${COMPANY_MANAGEMENT}/signup`
export const COMPANY_MANAGEMENT_TRAINEE_FILTER = `${COMPANY_MANAGEMENT}/trainee/filter`

const routes = {
  home: {
    path: HOME,
  },
  leagueOverView: {
    path: LEAGUE_OVER_VIEW,
  },
  leagueService: {
    path: LEAGUE_SERVICE,
  },
  exercitation: {
    path: EXERCITATION,
    base: {
      path: EXERCITATION_BASE,
    },
    posts: {
      path: EXERCITATION_POSTS,
      info: {
        path: EXERCITATION_POSTS_INFO,
      },
      apply: {
        path: EXERCITATION_POSTS_APPLY,
      },
    },
    institute: {
      path: EXERCITATION_INSTITUTE,
    },
    model: {
      path: EXERCITATION_MODEL,
    },
  },
  memberCenter: {
    path: MEMBER_CENTER,
  }
  ,
  memberTrends: {
    path: MEMBER_TRENDS,
  }
  ,
  contact: {
    path: CONTACT,
  }
  ,
  companyManagement: {
    path: COMPANY_MANAGEMENT,
    postsPublish: {
      path: COMPANY_MANAGEMENT_POSTS_PUBLISH,
    },
    postsManage: {
      path: COMPANY_MANAGEMENT_POSTS_MANAGE,
    },
    msgPerfection: {
      path: COMPANY_MANAGEMENT_MSG_PERFECTION,
    },
    signUp: {
      path: COMPANY_MANAGEMENT_SIGNUP,
    },
    traineeFilter: {
      path: COMPANY_MANAGEMENT_TRAINEE_FILTER
    }
  }
}

export default routes