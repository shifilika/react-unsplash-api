import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Header from './components/Header';

import Footer from './components/Footer';
import LetestPhoto from './components/LetestPhoto';


function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col">
              <LetestPhoto></LetestPhoto>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );

}


export default App;
