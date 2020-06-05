import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import galaxy3 from "./img/galaxy3.jpg";

import Dashboard from "./components/dashboard/Dashboard.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import PostDetail from "./components/posts/PostDetail.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import Submissions from "./components/information/Submissions.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import CreatePost from "./components/createpost/CreatePost.jsx";
import AboutUs from "./components/information/AboutUs.jsx";
import Footer from "./components/footer/Footer.jsx";
import Profile from "./components/profile/Profile.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <img src={galaxy3} alt="bg" className="bg"></img>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/postdetail/:id" component={PostDetail} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/submissions" component={Submissions} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/profile" component={Profile} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
