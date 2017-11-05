/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'
import LineHeader from '../../../commons/LineHeader/index'
import ModelShow from './ModelShow'
import ModelMore from './ModelMore'

import model1 from '../../images/model/model1.png'
import model2 from '../../images/model/model2.png'
import model3 from '../../images/model/model3.png'
import model4 from '../../images/model/model4.png'

import './index.css'

const Models = () => (
  <section className="exercitation-models">
    <LineHeader title="实习标兵"/>
    <div className="exercitation-models-show-container">
      <ModelShow
        name="张xxx"
        info="华科-360实习标兵">
        <img src={model1} alt="标兵" />
      </ModelShow>
      <ModelShow
        name="张xxx"
        info="华科-360实习标兵">
        <img src={model2} alt="标兵" />
      </ModelShow>
      <ModelShow
        name="张xxx"
        info="华科-360实习标兵">
        <img src={model3} alt="标兵" />
      </ModelShow>
      <ModelShow
        name="张xxx"
        info="华科-360实习标兵">
        <img src={model4} alt="标兵" />
      </ModelShow>
      <ModelShow
        name="张xxx"
        info="华科-360实习标兵">
        <img src={model1} alt="标兵" />
      </ModelShow>
    </div>
    <ModelMore />
  </section>
)

export default Models