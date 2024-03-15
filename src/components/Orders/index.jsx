import React from "react";
import styles from "./Orders.module.scss";
import { TiDelete } from "react-icons/ti"; // Добавляю в orders так как, нужно именно в корзине создать иконку удаления

export default function Orders(props) {
    return(
        <div className={styles.item}>
            <img src = {"./images/" + props.item.img} alt = "Error" className={styles.smallImg} /> {/*Тут открываются фигруные скобки {} и открываются кавычки "", Соединяю путь к файлу + место в массиве, какая картинка будет в массиве*/}
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}</b>
            <TiDelete onClick={()=>props.onDelete(props.item.id)} className={styles.deleteIcon}/>
        </div>    
    );
}