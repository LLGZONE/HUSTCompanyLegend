import React from 'react'

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

class Home extends React.Component {

  render() {
    const {
      feature: {
        exchange,
        base,
        help
      }
    } = this.props
    return (
      <div>
        <Header />
        <Feature exchange={exchange} base={base} help={help}/>
        <Announcement />
      </div>
    )
  }
}

export default Home