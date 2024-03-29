import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import Orders from "../Orders/index.tsx"
import { useAppContext } from "../../useAppContext.tsx";



const Header:React.FC = () => {
    const {orders}=useAppContext(); // Фигурные скобки, так как я получаю сразу две переменные - Здесь идёт получение на прямую, а не через props
    
    let [cartOpen, setCartOpen] = useState<boolean>(false); // Начальное значение для useState() я задаю false

    const showOrders=()=>{
        let summ=0;
        // summ+= Number.parseFloat(element)
        orders.forEach(element => {
            // summ+= Number.parseFloat(element.price)});
            if(element.price==="Free") {
                summ+=0;
            } else if(typeof Number.parseFloat(element.price) === "number"){
                summ+= Number.parseFloat(element.price);
    }})
        return(
            <div>
                {orders.map(el=>(
                    <Orders key={el.id} item={el}/> // Удаление delteOrder
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

    console.log(orders.length);

    return(
        <header>
            <div className= {styles.hello}>
                <span className = {styles.logo}>Jew</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <FaShoppingCart className={`${styles.shopIcon} ${cartOpen ? styles.active : ""}`} onClick={() => setCartOpen((prevCardOpen) => !prevCardOpen)}/>

                {cartOpen &&(
                    <div className={styles.shopCart}>
                        {/*  .orders.map(el => ( */}
                            {/* // { .orders.length>0 ? showOrders(proprs) : showNothing()}
                            //  .orders.length>2 ? <Orders key={el.id} item={el}/> : <h1>Ничего нет</h1> Данное логическое условие не совсем работает, так как у меня .map запускается по килку кнопки, а тут нет клика и поэтому здесь не работает
                            // <Orders key={el.id} item={el}/>
                            // showOrders( )  showNothing(); */}
                            {orders.length>0 ? showOrders( ) : showNothing()} {/*Здесь всё работает так, так как если я сделаю через цикл, вся функция перестанет работать в виду того, что в цикле я сделал по клику, а мне нужно, чтобы showNothing сработал сразу, а потом уже функция showOrders по клику, поэтому я перенёс всё в отдельные функции */} 
                    </div>
                )}
            </div>
            <div className = {styles.presentation}></div>
        </header>
    )
}

export default Header;