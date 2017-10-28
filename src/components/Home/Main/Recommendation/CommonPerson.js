/**
 * Created by LLGZONE on 2017/10/28.
 */
//为了方便而添加的文件，后期更改
import React from 'react'
import person from '../images/person.jpg'
import './CommonPerson.css'

const CommonPerson = () => (
  <div className="home-main-rec-person">
    <div className="home-main-rec-hidden-msg">
      <div className="home-main-rec-name">
        <p>张三</p>
        <p>华中科技大学</p>
      </div>
      <div className="home-main-rec-icons">
        <i className="fa fa-facebook">{}</i>
        <i className="fa fa-twitter">{}</i>
        <i className="fa fa-instagram">{}</i>
      </div>
    </div>
    <div className="home-main-rec-person-img">
      <img src={person} alt="人才" />
    </div>
  </div>
)

export default CommonPerson