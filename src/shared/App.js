import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import Qna from "../pages/Qna";
import Study from "../pages/Study";
import StudyDetail from "../pages/StudyDetail";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import './App.css';


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>

        {/* <Header></Header> */}
        <Coontainer>
          <Route path='/' exact component={Main}/>
          <Route path='/mypage' exact component={MyPage}/>
          <Route path='/qna' exact component={Qna}/>
          {/* <Route path='/qna/id' exact component={QnaDetail}/>
          <Route path='/qnawrite' exact component={QnaWrite}/> */}
          <Route path='/study' exact component={Study}/>
          <Route path='/study/:id' exact component={StudyDetail}/>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
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
