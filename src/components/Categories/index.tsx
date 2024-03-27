import React, {Children, useContext} from "react";
import styles from "./Categories.module.scss";
// Указываю от куда я буду брать import useAppContext
import { useAppContext } from "../../useAppContext.tsx";

// Создаю interface для назначения типов данных свойствам(ключам)
interface Category {
    key:string;
    name:string;
}

// Тут нужно указать, что key - тип данных string, что name - тип данных string и нужно это указать в interface
const Categories:React.FC = () => {
    
    const {chooseCategory}=useAppContext()

    // Передаю Category
    const categories:Category[] = [ // Вызываю interface Category и указываю массив [], что он получает массив и принимает в себя
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

export default Categories; // Экспортирую Categories