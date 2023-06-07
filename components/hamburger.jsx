import React, { Component } from 'react'

import Link from "next/link";


export default class Hamburger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }


    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    render() {
        return (
            <nav>
                <button className={this.state.open ? "hamburger flex-vertical active" : "hamburger flex-vertical" } onClick={this.handleButtonClick} onKeyDown={this.handleButtonClick}>
                    {!this.state.open && (
                    <div className="hamContainer">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                    )}
                    {this.state.open && (
                    <div className="closeContainer">
                        <div className="close close1"></div>
                        <div className="close close2"></div>
                    </div>
                    )}
                </button>
                {this.state.open && (
                    <nav className="navigation flex-vertical">
                        
                        <ul className="flex-md">
                            <li>
                                <Link href="/" className="link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="link">
                                    Projects
                                </Link>
                            </li>
                        </ul>

                    </nav>
                )}
            </nav>
        )
    }
}

