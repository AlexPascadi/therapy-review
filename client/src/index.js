import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import LandingPage from './components/Landing_Page/LandingPage'
import LoginPage from './components/Login_Page/LoginPage'
import MainSearchPage from './components/Main_Search_Page/MainSearchPage'
import Detailed_Account_Page from './components/Detailed_Account_Page/Detailed_Account_Page'
import MyAccountPage from './components/My_Account_Page/MyAccountPage'
import WriteAReviewPage from './components/Write_A_Review_Page/WriteAReviewPage'
import ReadMoreReviewsPage from './components/Read_More_Reviews_Page/ReadMoreReviewsPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
      <App />,
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={LandingPage}/>
  //     <Route exact path="/login" component={LoginPage}/>
  //     <Route exact path="/search" component={MainSearchPage}/>
  //     <Route exact path="/:therapist" component={Detailed_Account_Page}/>
  //     <Route exact path="/:therapist/readmorereviews" component={ReadMoreReviewsPage}/>
  //     <Route exact path="/:therapist/writeareview" component={WriteAReviewPage}/>
  //   </Switch>
  // </BrowserRouter>,
  document.getElementById('root')
);

