// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Foot from "./components/Footers";
import Project from "./components/Project";
import Skills from "./components/Skills";


// import { Provider } from "react-redux";
// import store from "./Store";

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <AppNavBar />
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      
      <Contact/>
      <Foot/>
    </div>
    // </Provider>
  );
}

export default App;
