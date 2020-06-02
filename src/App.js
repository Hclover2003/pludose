import React, { Component } from "react";
import Todos from "./components/todos/Todos";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostDetail from "./components/posts/PostDetail";
import SignIn from "./components/auth/SignIn";
import Submissions from "./components/information/Submissions";
import SignUp from "./components/auth/SignUp";
import CreatePost from "./components/createpost/CreatePost";
import AboutUs from "./components/information/AboutUs";
import galaxy3 from "./img/galaxy3.jpg";
import Footer from "./components/footer/Footer";
import Loading from "./components/layout/Loading";

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
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
