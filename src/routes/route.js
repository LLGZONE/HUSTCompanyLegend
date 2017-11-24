//主页面
const Home = '/'
//联盟动态
const LeagueOverview = '/league/overview'
//联盟服务
const LeagueService = '/league/service'
//实习平台
const Exercitation = '/exercitation'
//会员中心
const MemberCenter = '/member/center'
//会员动态
const MemberTrends = '/member/trends'
//联系我们
const Contact = '/contact'

const routes = {
  Home: {
    path: Home,
    exact: true,
  },
  LeagueOverview: {
    path: LeagueOverview,
    exact: true,
  },
  LeagueService: {
    path: LeagueService,
    exact: true,
  },
  Exercitation: {
    path: Exercitation,
    exact: true,
    routes: [
      {
        path: `${Exercitation}/`,
      },
      {
        path: `${}`
      }
    ]
  },
  MemberCenter: {
    path: MemberCenter,
    exact: true,
  },
  MemberTrends: {
    path: MemberTrends,
    exact: true,
  },
  Contact: {
    path: Contact,
    exact: true,
  }
}

export default routes