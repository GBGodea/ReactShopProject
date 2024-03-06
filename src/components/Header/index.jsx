import React from "react";
import styles from "./Header.module.scss"

export default function Header() {
    


    return(
        <header>
            <div className= {styles.hello}>
                <span className = {styles.logo}>Jew</span>
            </div>
            <div className = {styles.presentation}></div>
        </header>
    )
}