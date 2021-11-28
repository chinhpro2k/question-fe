import React, {useEffect, useState} from 'react'
import QuestionRouter from "./components/QuestionRouter";
import './style.scss'
import {Link} from "react-router-dom";
function Question(props) {

    return (
        <div id="question" className="d-flex">
            <div className="banner-left">
                <div>
                    <div className="header">
                        <h1>WPR</h1>
                        <div className="title-header">
                            <h2>HTML QuiZ</h2>
                        </div>
                    </div>
                    <div className="list-select">
                        <ul>
                            <li><Link to="/">All question</Link></li>
                            <li><Link to="/add">New question</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="banner-right">
                <QuestionRouter/>
            </div>
        </div>
    )
}

export default Question;