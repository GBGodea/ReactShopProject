import React from "react";
import styles from "./Items.module.scss";
import Item from "./../Item";

export default function Items(props) {
    return(
        <main>
            {props.allItems.map(element => (
                <Item key = {element.id} item = {element} onAdd = {props.onAdd}/> // Задаётся такое же название как и в app.js
            ))}
        </main>
    )
}