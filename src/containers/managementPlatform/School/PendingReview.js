import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

import LineHeader from '../../../components/commons/LineHeader/index'

import '../../../components/managementPlatform/Company/PendingReview/index.scss'

const PendingReview = ({
                         name,
                         site,
                         certId,
                         corporation,
                         highAuth,
                         intro,
                       }) => (
  <section>
    <LineHeader title="请耐心等待审核" style={{ fontSize: '1.125' }}/>
    <Grid container justify="center">
      <Grid xs={10} item>
        <Card>
          <CardHeader
            className="pending-main-container"
            title={`学校个人信息`}
          />
          <CardContent>
            <Typography>
              学校名：{name}
            </Typography>
            <Typography>
              网站名: {site}
            </Typography>
            <Typography>
              法人：{corporation}
            </Typography>
            <Typography>
              上级部门：{highAuth}
            </Typography>
            <Typography>
              证书编号: {certId}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <br/>
    <br/>
    <div className="pending-intro">
      {intro}
    </div>
    <div style={{ paddingRight: '20vmin' }} className="pending-foot-btn">
      <input type="button" value="撤回"/>
      <input type="button" value="修改"/>
    </div>
  </section>
)

PendingReview.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
}

export default PendingReview