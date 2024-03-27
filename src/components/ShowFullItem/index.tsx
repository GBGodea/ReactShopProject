import React from "react";
import styles from "./ShowFullItem.module.scss";
import { useAppContext } from "../../useAppContext.tsx";

const ShowFullItem:React.FC = () => { // Просто меняю разрешение на tsx и указываю React.FC
    const {fullItem, onShowItem, addToOrder} = useAppContext();
    return (
        <div className={styles.fullItem}>
            <div>
                <img src = {"./images/" + fullItem.img} alt = "Error" className={styles.hoverImg} onClick={()=>onShowItem(fullItem)}/> {/*Тут открываются фигруные скобки {} и открываются кавычки "", Соединяю путь к файлу + место в массиве, какая картинка будет в массиве*/}
                <h2>{fullItem.title}</h2>
                <p>{fullItem.desc}</p>
                <b>{fullItem.price}</b>
                <div className={styles.addToCard} onClick={() => addToOrder(fullItem)}> {/*При нажатии "Добавления в корзину", данные передаются в item, потом они идут в items, потом идут в app.js */}
                    <img src="../../images/addtocart.svg"/>
                </div>
            </div>
        </div>

    )
}

export default ShowFullItem; // Прописываю export default