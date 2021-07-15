import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import store from "./redux/configStore";
import Header from "./shared/Header";

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
          <title>LightHouse99</title>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://lighthouse99.club/" />
          <meta property="og:title" content="LightHouse99: 등대99" />
          <meta property="og:description" content="항해를 준비하는 이들을 위한 스터디 매칭 서비스" />
          <meta property="og:image" content="https://s3.ap-northeast-2.amazonaws.com/lighthouse99.club/thumb.jpg" />
          </Helmet>
    <Header/>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
