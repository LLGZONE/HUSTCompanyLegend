/**
 * Created by LLGZONE on 2017/11/4.
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'

import Overview from '../src/components/Exercitation/ExercitationPostsInfo/Overview'
import CompanyInfo from '../src/components/Exercitation/ExercitationPostsInfo/CompanyInfo'
import Module from '../src/components/Exercitation/ExercitationPostsInfo/Module'

import _360 from '../src/components/Exercitation/images/Base/360.png'

storiesOf('PostsInfo', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('overview', () => <Overview title="大数据平台开发工程师" company="360集团有限公司武汉分公司" place="武汉/洪山区" beOfficial={false} mark={7.8} duration="三个月"/>)
  .add('companyInfo', () => <CompanyInfo imgSrc={_360} companyName="360集团有限公司" place="武汉东湖开发区xxx" size={100} website="http://www.360.com"/>)
  .add('module', () => <Module title="实习岗位描述">
    <pre>
      {
        `      岗位职责:
      负责一点商业化广告数据建设，建立完善的底层存储，数据计算，数据仓库，OLAP分析，实时计算，业务建模等。
      任职资格:
      1. 计算机或相关专业本科以上学历，大数据开发相关工作经验；
      2. 精通JAVA/Python任意一门；
      3. 熟悉Hadoop/Hive/HBase/Spark/Storm/Kafka等；
      4. 熟悉某一大数据源码优先；
      5. 相关互联网公司工作经验优先。`
      }
    </pre>
  </Module>)