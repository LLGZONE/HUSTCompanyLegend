import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/Home/Header'
import Feature from '../../components/Home/Main/Feature'
import Announcement from '../../components/Home/Main/Announcement'
import Members from '../../components/Home/Main/Members'
import Achievement from '../../components/Home/Main/Achievement'
import WorkChance from '../../components/Home/Main/WorkChance'
import Experts from '../../components/Home/Main/Experts'
import Recommendation from '../../components/Home/Main/Recommendation'
import FooterHeader from '../../components/Home/Footer'
import Footer from '../../components/commons/Footer'

import '../../components/Home/Main/index.scss'
import home from '../../api/home'

class Home extends React.Component {
  static propTypes = {
    feature: PropTypes.object,
    announcements: PropTypes.array,
    members: PropTypes.array,
    achievements: PropTypes.object,
    workChanceDatas: PropTypes.array,
    experts: PropTypes.array,
    recommendTalents: PropTypes.array,
    footer: PropTypes.object,
  }

  static defaultProps = home
  render() {
    const {
      feature,
      announcements,
      members,
      achievements: {
        league,
        projects,
      },
      workChanceDatas,
      experts,
      recommendTalents,
      footer: {
        hotClicks,
        latestArticle
      },
    } = this.props

    return (
      <>
        <Header />
        {feature ? <Feature exchange={feature.exchange} base={feature.base} help={feature.help}/> :  <Feature/>}
        <Announcement announcements={announcements} />
        <Members members={members}/>
        <Achievement league={league} projects={projects}/>
        <section className="home-main-row">
          <WorkChance datas={workChanceDatas}/>
          <Experts experts={experts}/>
        </section>
        <Recommendation talents={recommendTalents}/>
        <FooterHeader/>
        <Footer hotClicks={hotClicks} latestArticle={latestArticle}/>
      </>
    )
  }
}

export default Home