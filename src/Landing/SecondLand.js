import React from 'react'
import './SecondLand.css'
import curvy from '../Image/svg/Asset\ 3.svg'
function SecondLand() {
    return (
        <div className="second__lands">
            <div className="left__secondLand__image__container"> 
                <img src={curvy} className="left__secondLand__image"/>
            </div>
            <div className="container secound__land">

           
            <div className="somediv"></div>
            <div className="rightSecond">
                <div>
                 <h2>Does Your School need Heos?</h2>
                <p>
                    A School's mission and vision will be aligned if management is effective.<br/>
                    Okay, but what if you already have a system in place?
                    Well, whether you’re a massive academic institution or a smaller one, you can use Heos to gain a clearer perspective on how your institution is performing and how to run and make plans for future academic years also to ensure your actions are always in accordance with your ultimate aims.
                    Heos will also enable you in strengthening your relationship with your teachers, students and their respective parents.
                </p>   
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default SecondLand
