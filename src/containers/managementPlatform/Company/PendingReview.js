/**
 * Created by LLGZONE on 2017/11/6.
 */
import React from 'react'
import { connect } from 'react-redux'
import {getCompanyInfo} from '../../../actions/company'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import Grid from 'material-ui/Grid'

import LineHeader from '../../../components/commons/LineHeader/index'

import '../../../components/managementPlatform/Company/PendingReview/index.scss'

let key = 0

class PendingReview extends React.Component {
  componentWillMount() {
    const {getCompanyInfo} = this.props
    getCompanyInfo()
  }

  render () {
    const {
      logo,         //公司 logo
      cname: companyName,  //公司名字
      corporation: linkman,      //联系人
      address: place,        //电话
      scale: size,         //规模
      phone,        //电话
      site: website,      //网站
      license,      //营业执照
      workImgs,     //工作环境
      intro: simpleIntro   //简介
    } = this.props

    return (
      <section>
        <LineHeader title="请耐心等待校方审核" style={{ fontSize: '1.125' }}/>
        <Grid container justify="space-around">
          <Grid item xs>
            <Card>
              <CardHeader
                className="pending-main-container"
                avatar={<Avatar src={logo} alt={`${companyName}`}/>}
                title={`${companyName}`}
              />
              <CardContent>
                <Typography>
                  地址：{`${place}`}
                </Typography>
                <Typography>
                  规模：{`${size}`}
                </Typography>
                <Typography>
                  网址：{`${website}`}
                </Typography>
                <Typography>
                  联系人：{`${linkman}`}
                </Typography>
                <Typography>
                  电话：{`${phone}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid style={{display: 'flex', justifyContent: 'center'}} item xs>
            <img className="pending-liscense" src={license} alt={`${companyName}信誉凭证`}/>
          </Grid>
        </Grid>
        <div className="pending-working-env">
          {workImgs.map(imgSrc => <img key={key++} src={imgSrc} alt="工作环境"/>)}
        </div>
        <div dangerouslySetInnerHTML={{__html: simpleIntro}} className="pending-intro" />
        <div className="pending-foot-btn">
          <input type="button" value="撤回"/>
          <input type="button" value="修改"/>
        </div>
      </section>
    )
  }
}

PendingReview.propTypes = {
  logo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  linkman: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  workImgs: PropTypes.array.isRequired,
  intro: PropTypes.string,
}

const mapStateToProps = (state) => {
  const {cname, phone, corporation, address, intro, site, scale} = state.reducers.company

  return {cname, phone, corporation, address, intro, site, scale}
}

export default connect(mapStateToProps, {getCompanyInfo})(PendingReview)