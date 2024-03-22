import React from "react";
import styles from "./Item.module.scss";
import { useAppContext } from "../../useAppContext";

export default function Item({item}) {
    const {fullItem,onShowItem, addToOrder}= useAppContext();
    return(
        <div className = {styles.item}>
            <img src = {"./images/" +   item.img} className={styles.hoverImg} onClick={()=>onShowItem(item)} alt = "Error"/> {/*Тут открываются фигруные скобки {} и открываются кавычки "", Соединяю путь к файлу + место в массиве, какая картинка будет в массиве*/}
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}</b>
            <div className={styles.addToCard} onClick={() => addToOrder(item)}> {/*При нажатии "Добавления в корзину", данные передаются в item, потом они идут в items, потом идут в app.js */}
                <img src="../../images/addtocart.svg"/>
            </div>
            
        </div>
    )
}