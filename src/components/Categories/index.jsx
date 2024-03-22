import React, {Children, useContext} from "react";
import styles from "./Categories.module.scss";
// Указываю от куда я буду брать import useAppContext
import { useAppContext } from "../../useAppContext";

export default function Categories() {
    
    const {chooseCategory}=useAppContext()

    const categories = [
        {
            key: "all",
            name: "Все"
        },
        {
            key: "Programming Language",
            name: "Языки программирования"
        },
        {
            key: "FrameWork",
            name: "Фреймворки"
        },
        {
            key: "Container",
            name: "Контейнер"
        },
        {
            key: "Operation System",
            name: "Операционные системы"
        }
    ]
    
    return(
        <div className={styles.categories}>
            {categories.map(el => (
                <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}