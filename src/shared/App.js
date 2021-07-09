import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import Qna from "../pages/Qna";
import QnaDetail from "../pages/QnaDetail";
import QnaWrite from "../pages/QnaWrite";
import Study from "../pages/Study";
import StudyDetail from "../pages/StudyDetail";
import './App.css';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path='/' exact component={Main}/>
        <Route path='/mypage' exact component={MyPage}/>
        <Route path='/qna' exact component={Qna}/>
        <Route path='/qna/id' exact component={QnaDetail}/>
        <Route path='/qnawrite' exact component={QnaWrite}/>
        <Route path='/study' exact component={Study}/>
        <Route path='/study/id' exact component={StudyDetail}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
