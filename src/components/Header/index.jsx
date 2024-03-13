import React, { useState } from "react";
import styles from "./Header.module.scss"
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    
    let [cartOpen, setCartOpen] = useState(false); // Начальное значение для useState() я задаю false

    return(
        <header>
            <div className= {styles.hello}>
                <span className = {styles.logo}>Jew</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <FaShoppingCart className={`${styles.shopIcon} ${cartOpen ? styles.active : ""}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/>

                {console.log(cartOpen ? styles.active : "")}

                {cartOpen &&(
                    <div className={styles.shopCart}></div>
                )}
            </div>
            <div className = {styles.presentation}></div>
        </header>
    )
}