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

export const LOGIN = '/exercitation/posts/apply/company'
//会员中心
export const MEMBER_CENTER = '/member/center'
//会员动态
export const MEMBER_TRENDS = '/member/trends'
//联系我们
export const CONTACT = '/CONTACT'

/**
 * 公司管理平台route
 * COMPANY_MANAGEMENT   主页
 *   & _SIGNUP           注册
 *   &_EXERCITATION     项目管理
 *     &_POSTS_PUBLISH    岗位发布
 *     &_POSTS_MANAGE     岗位管理
 *     &_MSG_PERFECTION   信息完善
 *     &_TRINEE_FILTER    实习生筛选
 *     &_PENDING          等待审核
 */
export const COMPANY_MANAGEMENT = '/management/company'
export const COMPANY_MANAGEMENT_SIGNUP = `${COMPANY_MANAGEMENT}/signup`

const COMPANY_MANAGEMENT_EXERCITATION = `${COMPANY_MANAGEMENT}/exercitation`
export const COMPANY_MANAGEMENT_POSTS_PUBLISH = `${COMPANY_MANAGEMENT_EXERCITATION}/posts/publish`
export const COMPANY_MANAGEMENT_POSTS_MANAGE = `${COMPANY_MANAGEMENT_EXERCITATION}/posts/manage`
export const COMPANY_MANAGEMENT_MSG_PERFECTION = `${COMPANY_MANAGEMENT_EXERCITATION}/user/message/perfection`
export const COMPANY_MANAGEMENT_TRAINEE_FILTER = `${COMPANY_MANAGEMENT_EXERCITATION}/trainee/filter`
export const COMPANY_MANAGEMENT_PENDING = `${COMPANY_MANAGEMENT_EXERCITATION}/pending`

/**
 *
 */
export const SCHOOL_MANAGEMENT = '/management/school'
export const SCHOOL_MANAGEMENT_MSG_PERFECTION = `${SCHOOL_MANAGEMENT}/user/message/perfection`
export const SCHOOL_MANAGEMENT_POSTS_REVIEW = `${SCHOOL_MANAGEMENT}/posts/review`
export const SCHOOL_MANAGEMENT_BASE_REVIEW = `${SCHOOL_MANAGEMENT}/base/review`
export const SCHOOL_MANAGEMENT_STUDENT_MANAGE = `${SCHOOL_MANAGEMENT}/student/manage`
export const SCHOOL_MANAGEMENT_POSTS_RECOMMENDATION = `${SCHOOL_MANAGEMENT}/posts/recommendation`
export const SCHOOL_MANAGEMENT_POSTS_WAITING = `${SCHOOL_MANAGEMENT}/posts/waiting`
export const SCHOOL_MANAGEMENT_POSTS_RATE = `${SCHOOL_MANAGEMENT}/posts/rate`

export const STUDENT_MANAGEMENT = `/management/student`
export const STUDENT_MANAGEMENT_MSG_PERFECTION = `${STUDENT_MANAGEMENT}/user/message/perfection`

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
  login: {
    path: LOGIN,
  },
  memberCenter: {
    path: MEMBER_CENTER,
  },
  memberTrends: {
    path: MEMBER_TRENDS,
  },
  contact: {
    path: CONTACT,
  },
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
      path: COMPANY_MANAGEMENT_TRAINEE_FILTER,
    },
    pending: {
      path: COMPANY_MANAGEMENT_PENDING,
    },
  },
  schoolManagement: {
    path: SCHOOL_MANAGEMENT,
    msgPerfection: {
      path: SCHOOL_MANAGEMENT_MSG_PERFECTION,
    },
    postsReview: {
      path: SCHOOL_MANAGEMENT_POSTS_REVIEW,
    },
    baseReview: {
      path: SCHOOL_MANAGEMENT_BASE_REVIEW,
    },
    studentManage: {
      path: SCHOOL_MANAGEMENT_STUDENT_MANAGE,
    },
    postsRecommend: {
      path: SCHOOL_MANAGEMENT_POSTS_RECOMMENDATION,
    },
    postsWaiting: {
      path: SCHOOL_MANAGEMENT_POSTS_WAITING,
    },
    postsRate: {
      path: SCHOOL_MANAGEMENT_POSTS_RATE
    },
  },
  studentManagement: {
    path: STUDENT_MANAGEMENT,
    msgPerfection: {
      path: STUDENT_MANAGEMENT_MSG_PERFECTION,
    }
  },
}

export default routes