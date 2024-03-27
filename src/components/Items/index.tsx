import React from "react";
import styles from "./Items.module.scss";
import Item from "../Item/index.tsx";
import { useAppContext } from "../../useAppContext.tsx";

const Items:React.FC = () => { // Меняю на стрелочную функцию
    const {currentItems} = useAppContext();
    return(
        <main className={styles.main}>
            {currentItems.map((element:any) => ( // Закрываю element в скобки, чтобы придать ему тип данных any
                <Item key = {element.id} item = {element}/> // Задаётся такое же название как и в app.js
            ))}
        </main>
    )
}

export default Items; // Делаю экспорт данного компонета React