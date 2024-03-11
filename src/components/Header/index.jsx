import React from "react";
import styles from "./Header.module.scss"

export default function Header() {
    


    return(
        <header>
            <div className= {styles.hello}>
                <span className = {styles.logo}>Jew</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
            </div>
            <div className = {styles.presentation}></div>
        </header>
    )
}