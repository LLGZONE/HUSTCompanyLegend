import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

import LineHeader from '../../../components/commons/LineHeader/index'

import '../../../components/managementPlatform/Company/PendingReview/index.scss'

const PendingReview = ({
                        name,
                        sex,
                        school,
                        birth,
                        major
                       }) => (
  <section>
    <LineHeader title="请耐心等待校方审核" style={{ fontSize: '1.125' }}/>
    <Grid container justify="center">
      <Grid xs={10} item>
        <Card>
          <CardHeader
            className="pending-main-container"
            title={`学生个人信息`}
          />
          <CardContent>
            <Typography>
              姓名：{name}
            </Typography>
            <Typography>
              性别：{sex}
            </Typography>
            <Typography>
              生日：{birth}
            </Typography>
            <Typography>
              所在学校：{school}
            </Typography>
            <Typography>
              所在专业：{major}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <div style={{paddingRight: '20vmin'}} className="pending-foot-btn">
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