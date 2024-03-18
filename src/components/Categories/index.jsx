import React from "react";
import styles from "./Categories.module.scss";

export default function Categories(props) {
    
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
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}