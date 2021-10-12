import React from 'react'
import './FirstLand.css'

import Rightpart from './Rightpart'
function FirstLand() {
    return (
        <div className="firstland container">
            <div className="left__firstland">
                <h1 className="header">Heos</h1>
                <h2>Manage Smarter</h2>
                <p>Heos is an educational site and app used to untangle communication between the school, the student and the parent. We at Heos are devoted to modernizing the school system, simplify the learning and teaching process and connect students with the academic world around them. </p>
                <button className="outlineButton buttonPadding">Show more</button>
            </div>
            <Rightpart/>
        </div>
    )
}

export default FirstLand
