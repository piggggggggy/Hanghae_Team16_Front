import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";

// components
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import Qna from "../pages/Qna";
import Study from "../pages/Study";
import StudyDetail from "../pages/StudyDetail";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Header from "./Header"

// modules
import { actionCreators as userActions } from "../redux/modules/user";

// helmet
import { Helmet } from "react-helmet";

function App() {

  const dispatch = useDispatch();

  const is_Token = document.cookie.match("USER_TOKEN") ? true : false;
 
  

  React.useEffect(() => {
    if (is_Token) {
      dispatch(userActions.loginCheckDB());
      console.log(is_Token);
    }
    
  }, []);


  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
      <Helmet>
        <title>LightHouse99</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://lighthouse99.club/" />
        <meta property="og:title" content="LightHouse99: 등대99" />
        <meta property="og:description" content="항해를 준비하는 이들을 위한 스터디 매칭 서비스" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/lighthouse-8c323.appspot.com/o/thumb.jpg?alt=media&token=00bf5092-7678-49c8-b1c7-731579a68d23" />
        </Helmet>
        <Header/>
          <Coontainer>
          <Route path='/' exact component={Main}/>
          <Route path='/mypage' exact component={MyPage}/>
          <Route path='/qna' exact component={Qna}/>
          <Route path='/study' exact component={Study}/>
          <Route path='/study/:id' exact component={StudyDetail}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/signup' exact component={SignUp}/>
        </Coontainer>
      </ConnectedRouter>
    </React.Fragment>
  );
}


const Coontainer = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export default App;
