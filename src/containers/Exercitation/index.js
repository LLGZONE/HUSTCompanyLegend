/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import ExercitationHeader from '../../components/commons/ExercitationHeader/index'
import Home from './Home'
import ExercitationPosts from './ExercitationPosts'
import ExercitationPostsInfo from './ExercitationPostsInfo'
import Footer from '../../components/commons/Footer/index'
import LogIn from '../../components/LogIn/index'
import AdShow from '../../components/Exercitation/Home/AdShow/index'

import hotClicks from '../../components/Home/hotClicks.json'
import articles from '../../components/Home/aticles.json'

const Exercitation = ({match}) => (
  <div>
    <ExercitationHeader/>
    <Route path="/exercitation(/posts)?(|)(/posts/filter)?" exact component={AdShow} />
    <Switch>
      <Route path="/exercitation" exact component={Home} />
      <Route path="/exercitation/posts/info" exact component={ExercitationPostsInfo} />
      <Route path="/exercitation/posts/apply/:type" component={LogIn} />
      <Route path="/exercitation/posts" component={ExercitationPosts} />
    </Switch>
    <Route path="/login" component={LogIn} />
    <Footer hotClicks={hotClicks} latestArticle={articles}/>
  </div>
)

export default Exercitation