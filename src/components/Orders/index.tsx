import React from "react";
import styles from "./Orders.module.scss";
import { TiDelete } from "react-icons/ti"; // Добавляю в orders так как, нужно именно в корзине создать иконку удаления
import { AnyItem, useAppContext } from "../../useAppContext.tsx";



const Orders:React.FC<AnyItem> = ({item}) => {
    const {deleteElem} = useAppContext();
    return(
        <div className={styles.item}>
            <img src = {require(`../../../public/images/${item.img}`)} alt = "Error" className={styles.smallImg} /> {/*Вот так я передаю динамически картинки*/}
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}</b>
            <TiDelete onClick={()=>deleteElem(item.id)} className={styles.deleteIcon}/>
        </div>    
    );
}

export default Orders;