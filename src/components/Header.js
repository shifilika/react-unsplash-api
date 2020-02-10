import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col col-auto my auto">
                            <a href="/" className="logo">photoshows</a>
                        </div>
                        <div className="col my auto text-right">
                            <div className="mainmenu">
                                <ul>
                                    <li><a href="/">home</a></li>
                                    <li><a href="/about">about</a></li>
                                    <li><a href="/desclemar">desclemar</a></li>
                                    <li><a href="/credite">credite</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
