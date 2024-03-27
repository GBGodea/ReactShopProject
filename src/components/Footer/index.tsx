import React from "react";
import styles from "./Footer.module.scss";

const Footer:React.FC = () => {
    return(
        <footer>
            Все права защищены &copy;
            <div className = {styles.tg}>
                <h1>Hello it's our official TG channel</h1>
            </div>
        </footer>
        
    )
}

export default Footer;