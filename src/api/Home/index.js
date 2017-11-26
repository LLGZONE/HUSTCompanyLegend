import workChanceDatas from './workchance.json'
import experts from './experts.json'
import hotClicks from './hotClicks.json'
import latestArticle from './aticles.json'

const home = {
  announcements: [
    {
      id: 1,
      year: 2017,
      month: 8,
      title: '“冰火”勘查诠释中国地质速度',
      msg: '近日，俗称“可燃冰”的天然气水合物成功获批为中国第173个矿种。这虽然是业界和公众意料之中的事，但还是引起了广泛关注和热烈讨论，人们由此预见，可燃冰作为一种战略性绿色能源，在中国获得了相应的法律地位，必将在勘查和开发利用方面迎来新的发展机遇。',
    },
    {
      id: 2,
      year: 2017,
      month: 8,
      title: '“冰火”勘查诠释中国地质速度',
      msg: '近日，俗称“可燃冰”的天然气水合物成功获批为中国第173个矿种。这虽然是业界和公众意料之中的事，但还是引起了广泛关注和热烈讨论，人们由此预见，可燃冰作为一种战略性绿色能源，在中国获得了相应的法律地位，必将在勘查和开发利用方面迎来新的发展机遇。',
    },
  ],
  members: [
    {
      id: 1,
      url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
      alt: 'qq',
    },
    {
      id: 2,
      url: 'http://pic.baike.soso.com/p/20130703/20130703151336-1280482321.jpg',
      alt: '360',
    },
    {
      id: 3,
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511677731770&di=086b3a6cfae7e5777ac5fc7e97292249&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131213%2F20131213115637-1062134399.jpg',
      alt: '百度'
    },
    {
      id: 4,
      url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
      alt: 'qq',
    },
    {
      id: 5,
      url: 'http://pic.baike.soso.com/p/20130703/20130703151336-1280482321.jpg',
      alt: '360',
    },
    {
      id: 6,
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511677731770&di=086b3a6cfae7e5777ac5fc7e97292249&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131213%2F20131213115637-1062134399.jpg',
      alt: '百度'
    },
  ],
  achievements: {
    league: {
      main: {
        title: '直击2017高交会现场，图解中兴力维最新“黑科技”',
        url: 'http://cms-bucket.nosdn.127.net/catchpic/4/42/42a37d6da29606856652c8f347f3b544.jpg?imageView&thumbnail=550x0',
        alt: '主体'
      },
      subTitles: [
        {
          id: 1,
          title: '继XZ Premium之后 索尼向Xperia XZ/XZs推送Android 8.0更新',
        },
        {
          id: 2,
          title: 'Windows 10 Redstone 4中带来对Game Bar的更新',
        },
        {
          id: 3,
          title: 'Firefox开测新功能：可警示某网站是否遭遇黑客攻击和数据泄露',
        },
        {
          id: 4,
          title: 'Microsoft Store上线字体：未来Windows 10可轻松切换字体',
        }
      ],
    },
    projects: [
      {
        id: 1,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
      {
        id: 2,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
      {
        id: 3,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
      {
        id: 4,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
      {
        id: 5,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
      {
        id: 6,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
      {
        id: 7,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
      {
        id: 8,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
      {
        id: 9,
        img: {
          url: 'http://www.qqzhi.com/uploadpic/2014-09-28/021635202.jpg',
          alt: 'qq',
        },
        type: '技术项目',
        title: '基于物联网的移动资产追踪项目',
        industry: '电子信息技术',
        date: '2017-8-12',
      },
    ]
  },
  workChanceDatas,
  experts,
  recommendTalents: [
    {
      name: '张三',
      school: '华中科技大学',
      contacturls: {
        facebook: '',
        twitter: '',
        ins: '',
      },
      photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3861961689,3853177072&fm=27&gp=0.jpg',
    },
    {
      name: '张四',
      school: '华中科技大学',
      contacturls: {
        facebook: '',
        twitter: '',
        ins: '',
      },
      photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3861961689,3853177072&fm=27&gp=0.jpg',
    },
    {
      name: '张五',
      school: '华中科技大学',
      contacturls: {
        facebook: '',
        twitter: '',
        ins: '',
      },
      photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3861961689,3853177072&fm=27&gp=0.jpg',
    },
    {
      name: '张六',
      school: '华中科技大学',
      contacturls: {
        facebook: '',
        twitter: '',
        ins: '',
      },
      photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3861961689,3853177072&fm=27&gp=0.jpg',
    },
    {
      name: '张七',
      school: '华中科技大学',
      contacturls: {
        facebook: '',
        twitter: '',
        ins: '',
      },
      photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3861961689,3853177072&fm=27&gp=0.jpg',
    },
    {
      name: '张八',
      school: '华中科技大学',
      contacturls: {
        facebook: '',
        twitter: '',
        ins: '',
      },
      photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3861961689,3853177072&fm=27&gp=0.jpg',
    },
  ],
  footer: {
    hotClicks,
    latestArticle,
  },
}

export default home