import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/Landing_Page/LandingPage'
import LoginPage from './components/Login_Page/LoginPage'
import MainSearchPage from './components/Main_Search_Page/MainSearchPage'
import Detailed_Account_Page from './components/Detailed_Account_Page/Detailed_Account_Page'
import MyAccountPage from './components/My_Account_Page/MyAccountPage'
import WriteAReviewPage from './components/Write_A_Review_Page/WriteAReviewPage'
import ReadMoreReviewsPage from './components/Read_More_Reviews_Page/ReadMoreReviewsPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App(){
    const [isAuthenticated, setisAuthenticated]=useState(false)
    // const [ViewProfile]

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/search" component={MainSearchPage}/>
                <Route exact path="/:therapistid" component={Detailed_Account_Page}/>
                <Route exact path="/:therapistid/readmorereviews" component={ReadMoreReviewsPage}/>
                <Route exact path="/:therapistid/writeareview" component={WriteAReviewPage}/>
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