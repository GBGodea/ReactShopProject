import React from "react";
import styles from "./ShowFullItem.module.scss";

export default function ShowFullItem(props) {
    return (
        <div className={styles.fullItem}>
            <div>
            <img src = {"./images/" + props.item.img} alt = "Error" className={styles.hoverImg} onClick={()=>props.onShowItem(props.item)}/> {/*Тут открываются фигруные скобки {} и открываются кавычки "", Соединяю путь к файлу + место в массиве, какая картинка будет в массиве*/}
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}</b>
            <div className={styles.addToCard} onClick={() => props.onAdd(props.item)}> {/*При нажатии "Добавления в корзину", данные передаются в item, потом они идут в items, потом идут в app.js */}
                <img src="../../images/addtocart.svg"/>
            </div>
            </div>
        </div>

    )
}