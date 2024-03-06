import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
    return(
        <footer>
            Все права защищены &copy;
            <div className = {styles.tg}>
                <h1>Hello it's our official TG channel</h1>
            </div>
        </footer>
        
    )
}