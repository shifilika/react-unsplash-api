import React from 'react';

import './App.css';

import Header from './components/Header';

import Footer from './components/Footer';
import LetestPhoto from './components/LetestPhoto';


function App() {
    return (
        <div className="app">
            <Header></Header>
            <div className="content-bolck">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Letest photos</h2>
                            <div className="row">
                                <LetestPhoto></LetestPhoto>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}


export default App;
