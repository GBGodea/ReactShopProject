import React from "react";
import styles from "./Item.module.scss";

export default function Item(props) {
    return(
        <div className = {styles.item}>
            <img src = {"./images/" + props.item.img} alt = "Error" className={styles.hoverImg} /> {/*Тут открываются фигруные скобки {} и открываются кавычки "", Соединяю путь к файлу + место в массиве, какая картинка будет в массиве*/}
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}</b>
            <div className={styles.addToCard} onClick={() => props.onAdd(props.item)}> {/*При нажатии "Добавления в корзину", данные передаются в item, потом они идут в items, потом идут в app.js */}
                <img src="../../images/addtocart.svg"/>
            </div>
            
        </div>
    )
}