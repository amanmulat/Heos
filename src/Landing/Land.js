import React from 'react'
import FirstLand from './FirstLand'
import './land.css'
import SecondLand from './SecondLand'
// import to from '../Image/svg/top-right.svg'
function Land() {
    return (
        <div className="land">
            <div className="top-left"></div>
            <div className="bottom-left"></div>
            <FirstLand />
            <SecondLand/>
            {/* <img src={to }/> */}
            
        </div>
    )
}

export default Land
