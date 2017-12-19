/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '../../routes'
import ExercitationHeader from '../../components/commons/ExercitationHeader/index'
import Home from './Home'
import ExercitationPosts from './ExercitationPosts'
import ExercitationPostsInfo from './ExercitationPostsInfo'
import Footer from '../../components/commons/Footer/index'
import LogIn from '../auth/LogIn/index'
import AdShow from '../../components/Exercitation/Home/AdShow/index'

import hotClicks from '../../api/home/hotClicks.json'
import articles from '../../api/home/aticles.json'

const Exercitation = ({match}) => {
  const exercitation = routes.exercitation

  return (
    <div>
      <ExercitationHeader/>
      <Route path="/exercitation(/posts)?(|)(/posts/filter)?" exact component={AdShow}/>
      <Switch>
        <Route path={exercitation.path} exact component={Home}/>
        <Route path={exercitation.posts.info.path} exact component={ExercitationPostsInfo}/>
        <Route path={`${exercitation.posts.apply.path}/:type`} component={LogIn}/>
        <Route path={exercitation.posts.path} component={ExercitationPosts}/>
      </Switch>
      <Route path={routes.login.path} component={LogIn}/>
      <Footer hotClicks={hotClicks} latestArticle={articles}/>
    </div>
  )
}

export default Exercitation