import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/Landing_Page/LandingPage'
import LoginPage from './components/Login_Page/LoginPage'
import {MainSearchPageLoggedIn,MainSearchPageNotLoggedIn} from './components/Main_Search_Page/MainSearchPage'
import {Detailed_Account_Page_Logged_In, Detailed_Account_Page_Not_Logged_In} from './components/Detailed_Account_Page/Detailed_Account_Page'
import MyAccountPage from './components/My_Account_Page/MyAccountPage'
import WriteAReviewPage from './components/Write_A_Review_Page/WriteAReviewPage'
import {ReadMoreReviewsPageLoggedIn, ReadMoreReviewsPageNotLoggedIn} from './components/Read_More_Reviews_Page/ReadMoreReviewsPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginPage} />
                {/* <Route
                    path='/dashboard'
                    render={(props) => (
                        <Dashboard {...props} isAuthed={true} />
                    )}
                /> */}
                <Route path="/search/:clientid" component={MainSearchPageLoggedIn}/>
                <Route exact path="/therapists/:therapistid" component={Detailed_Account_Page_Not_Logged_In} />
                <Route path="/readmorereviews/:therapistid" component={ReadMoreReviewsPageNotLoggedIn} />
                <Route path="/writeareview/:therapistid/:clientid" component={WriteAReviewPage}/>
                <Route path="/clients/:clientid" component={MyAccountPage} />
                <Route exact path="/search" component={MainSearchPageNotLoggedIn}/>
                <Route exact path="/therapists/:therapistid/:clientid" component={Detailed_Account_Page_Logged_In} />
                <Route path="/readmorereviews/:therapistid/:clientid" component={ReadMoreReviewsPageLoggedIn} />
            </Switch>
        </BrowserRouter>



        // <LoginPage />
        //  <LandingPage/>
        // <MainSearchPage />  //add margin at bottom
        // <Detailed_Account_Page name='Dr. Adam Raff, MD'/>
        // <MyAccountPage username='Sae Tsunawaki' email='saetsunawaki@gmail.com' password='ilovebunnies'/>
        // <WriteAReviewPage />
        // <ReadMoreReviewsPage name='Dr. Adam Raff, MD'/>
    )
}

export default App;