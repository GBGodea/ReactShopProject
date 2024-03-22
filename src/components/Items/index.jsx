import React from "react";
import styles from "./Items.module.scss";
import Item from "./../Item";
import { useAppContext } from "../../useAppContext";

export default function Items() {
    const {currentItems} = useAppContext();
    return(
        <main>
            {currentItems.map(element => ( // Меняю allItems, а currentItems, так как по сути как он узнает что такое allItems, а currentItems, он знает
                <Item key = {element.id} item = {element}/> // Задаётся такое же название как и в app.js
            ))}
        </main>
    )
}