/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import ExercitationHeader from '../commons/ExercitationHeader'
import Home from './Home'
import ExercitationPosts from './ExercitationPosts'
import ExercitationPostsInfo from './ExercitationPostsInfo'
import Footer from '../commons/Footer'
import LogIn from '../LogIn'
import AdShow from './Home/AdShow'

import hotClicks from '../Home/hotClicks.json'
import articles from '../Home/aticles.json'

const Exercitation = ({match}) => (
  <div>
    <ExercitationHeader/>
    <Route path="/exercitation(/posts)?(|)(/posts/filter)?" exact component={AdShow} />
    <Switch>
      <Route path="/exercitation" exact component={Home} />
      <Route path="/exercitation/posts/info" exact component={ExercitationPostsInfo} />
      <Route path="/exercitation/posts" exact  component={ExercitationPosts} />
      <Route path="/exercitation/posts/apply" exact  component={LogIn} />
    </Switch>
    <Route path="/login" component={LogIn} />
    <Footer hotClicks={hotClicks} latestArticle={articles}/>
  </div>
)

export default Exercitation