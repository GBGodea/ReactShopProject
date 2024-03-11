import React from "react";
import styles from "./Items.module.scss";
import Item from "./../Item";

export default function Items(props) {
    return(
        <main>
            {props.allItems.map(element => (
                <Item key = {element.id} item = {element}/> // Ключ это уникальный элемент для каждого товара
            ))}
        </main>
    )
}