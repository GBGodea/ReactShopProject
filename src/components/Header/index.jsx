import React, { useState } from "react";
import styles from "./Header.module.scss"
import { FaShoppingCart } from "react-icons/fa";
import Orders from "../Orders"



export default function Header(props) { // props используется для передачи данных
    
    let [cartOpen, setCartOpen] = useState(false); // Начальное значение для useState() я задаю false

    const showOrders=(props)=>{
        let summ=0;
        // summ+= Number.parseFloat(element)
        props.orders.forEach(element => {
            // summ+= Number.parseFloat(element.price)});
            if(element.price==="Free") {
                summ+=0;
            } else if(typeof Number.parseFloat(element.price) === "number"){
                summ+= Number.parseFloat(element.price);
    }})
        return(
            <div>
                {props.orders.map(el=>(
                    <Orders onDelete={props.onDelete} key={el.id} item={el}/>
                ))}
                <p className={styles.summ}>Итого: {Intl.NumberFormat().format(summ)}</p>
            </div>
        )
    }

    const showNothing=()=>{
        return(// Создаю div блок с className
            <div className={styles.empty}> 
                <h2>Товары отсутствуют в корзине</h2>
            </div>
        )
    }

    console.log(props.orders.length);

    return(
        <header>
            <div className= {styles.hello}>
                <span className = {styles.logo}>Jew</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <FaShoppingCart className={`${styles.shopIcon} ${cartOpen ? styles.active : ""}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/>

                {console.log(cartOpen ? styles.active : "")}

                {cartOpen &&(
                    <div className={styles.shopCart}>
                        {/* props.orders.map(el => ( */}
                            {/* // {props.orders.length>0 ? showOrders(proprs) : showNothing()}
                            // props.orders.length>2 ? <Orders key={el.id} item={el}/> : <h1>Ничего нет</h1> Данное логическое условие не совсем работает, так как у меня .map запускается по килку кнопки, а тут нет клика и поэтому здесь не работает
                            // <Orders key={el.id} item={el}/>
                            // showOrders(props)  showNothing(); */}
                            {props.orders.length>0 ? showOrders(props) : showNothing()} {/*Здесь всё работает так, так как если я сделаю через цикл, вся функция перестанет работать в виду того, что в цикле я сделал по клику, а мне нужно, чтобы showNothing сработал сразу, а потом уже функция showOrders по клику, поэтому я перенёс всё в отдельные функции */} 
                    </div>
                )}
            </div>
            <div className = {styles.presentation}></div>
        </header>
    )
}