import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/PageHome";
import PageNotFound from "./components/PageNotFound";
import PageTopics from "./components/PageTopics";
import PageUsers from "./components/PageUsers";
import PageProfile from "./components/PageProfile";
import PageTweet from "./components/PageTweet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <router-view></router-view> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PageHome />} />
          <Route path="topics" element={<PageTopics />}>
            <Route path=":topic" element={<PageTopics />} />
          </Route>
          <Route path="users" element={<PageUsers />}>
            <Route path=":author" element={<PageUsers />} />
          </Route>
          <Route path="profile" element={<PageProfile />} />
          <Route path="tweet/:tweet" element={<PageTweet />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* 
              <Route path="/users/:author" element={<PageUsers />} />
              <Route path="/profile" element={<PageProfile />} />
               */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
