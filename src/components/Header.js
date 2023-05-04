import React from "react";
import './Header.css'

export default ({black}) =>{
    return(
            <header className={black ? 'black' : ''}> 
            <div className="header--logo"> 
            <a href="/"> 
            <img src="https://i.pinimg.com/564x/fd/7a/4c/fd7a4c396358121e4bd09f657d6718af.jpg" alt="Logo da Netflix"></img>
            </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"/>

                </a>
            </div>
        </header>
    )

}