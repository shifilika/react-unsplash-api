import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h2>Lorem ipsum dolor sit amet.</h2>
                                <h3>+08801751433289</h3>
                                <div className="footermenu">
                                    <ul>
                                        <li><a href="/">facebook</a></li>
                                        <li><a href="/">youtube</a></li>
                                        <li><a href="/">twitter</a></li>
                                        <li><a href="/">linkdin</a></li>
                                    </ul>
                                </div>
                                <div className="copy-right-text">Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
