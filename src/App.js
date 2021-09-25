import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Login from "./pages/login";
import NotFound from "./components/NotFound";
import Courses from "./pages/courses";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { PrivateRoute } from "./components/PrivateRoute";
import Uploads from "./components/Uploads";
import Videos from "./components/Vidoes";
import styled from "styled-components";

const firebaseConfig = {
  apiKey: "AIzaSyA39YJhDFSVnPnTju0Gjf_GEMyvDjVuZb0",
  authDomain: "self-learner-25a57.firebaseapp.com",
  projectId: "self-learner-25a57",
  storageBucket: "self-learner-25a57.appspot.com",
  messagingSenderId: "124746110739",
  appId: "1:124746110739:web:d97fa5d784c34abf1aace6",
  measurementId: "G-VKTGFBHB2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Router>
      <Navbar />
      <ContentContainer>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/uploads" component={Uploads} />
        <PrivateRoute path="/play/:videoId" component={Videos} />
        <Route path="/courses" component={Courses} />
        <Route path="/about" exact component={About} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/login" component={Login} />
        {/* <Route path='/logout' component={} /> */}
        <Route path="/" component={NotFound} />
      </Switch>
      </ContentContainer>
    </Router>
  );
}

export default App;

const ContentContainer = styled.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  padding: 10px 0 0 0;
`