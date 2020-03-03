import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 my-auto">
                                <a href="/" className="logo">photoshows</a>
                            </div>
                            <div className="col-lg-4 my-auto text-center">
                                <div className="mainmenu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Disclainer</a></li>
                                        <li><a href="/">credits</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 my-auto text-right">
                                <form action="/">
                                    <input type="text" placeholder="search keyword" />
                                    <input type="submit" value="search" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
