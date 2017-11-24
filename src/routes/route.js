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
  },
  LeagueOverview: {
    path: LeagueOverview,
  },
  LeagueService: {
    path: LeagueService,
  },
  Exercitation: {
    path: Exercitation,
    routes: [
      {
        path: `${Exercitation}/`,
      },
      {
        path: `${Exercitation}/base`,
      },
      {
        path: `${Exercitation}/posts`,
      },
      {
        path: `${Exercitation}/institute`,
      },
      {
        path: `${Exercitation}/model`,
      },
      {
        path: MemberCenter,
      }
    ]
  },
  MemberCenter: {
    path: MemberCenter,
  },
  MemberTrends: {
    path: MemberTrends,
  },
  Contact: {
    path: Contact,
  }
}

export default routes