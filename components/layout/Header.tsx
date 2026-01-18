import React from "react"

const Header: React.FC = () => {
    return(
        <header>
        <h1>Logo</h1>

        <nav className=" flex gap-5">
            <a><li>search bar</li></a>
            <a><li>sign up</li></a>
            <a><li>sign in</li></a>
            <a><li>type of accommodation</li></a>
        </nav>
        </header>
    );
}


export default  Header