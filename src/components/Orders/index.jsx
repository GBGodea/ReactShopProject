import React from "react";
import styles from "./Orders.module.scss";
import { TiDelete } from "react-icons/ti"; // Добавляю в orders так как, нужно именно в корзине создать иконку удаления
import { useAppContext } from "../../useAppContext";

export default function Orders({item}) {
    const {deleteElem} = useAppContext();
    return(
        <div className={styles.item}>
            <img src = {"./images/" + item.img} alt = "Error" className={styles.smallImg} /> {/*Тут открываются фигруные скобки {} и открываются кавычки "", Соединяю путь к файлу + место в массиве, какая картинка будет в массиве*/}
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}</b>
            <TiDelete onClick={()=>deleteElem(item.id)} className={styles.deleteIcon}/>
        </div>    
    );
}