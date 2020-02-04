import React, {Component} from 'react'
import './App.css';
import Sidebar from './Component/Common/sidebar';
import Header from './Component/Common/header';
import Footer from './Component/Common/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dieuhuong from './Router/Dieuhuong';

export default class App extends Component {


  render() {
    return (
      <Router>
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                  <Header/>
                  <div className="container-fluid" id="container-wrapper">                
                    <Dieuhuong></Dieuhuong>
                  </div>
                 
              </div>
              <Footer/>
            </div>
        </div>
      </Router>
    );
  }
}

