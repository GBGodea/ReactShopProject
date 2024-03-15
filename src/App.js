import React from "react";
import {useState} from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "./index.scss";

function App() {

  const [items, setItems] = useState([
    { // Первый товар
      id: 1,
      title: "Javascript",
      img: "JavaScript.png",
      desc: "lorem ipsum dolor",
      category: "Programming Language",
      price: "111",
    }, 
    { // Второй товар
      id: 2,
      title: "NodeJS",
      img: "NodeJS.png",
      desc: "lorem ipsum dolor",
      category: "FrameWork",
      price: "333", 
    }, 
    { // Третий товар
      id: 3,
      title: "Java",
      img: "Java.jpg",
      desc: "lorem ipsum dolor",
      category: "Programming Language",
      price: "Free",
    },
    { // Четвёртый товар
      id: 4,
      title: "Spring",
      img: "JavaSpring.png",
      desc: "lorem ipsum dolor",
      category: "FrameWork",
      price: "Free",
    },
    { // Пятый товар
      id: 5,
      title: "Csharp",
      img: "Csharp.png",
      desc: "lorem ipsum dolor",
      category: "Programming Language",
      price: "Free",
    },
    { // Шестой товар
      id: 6,
      title: "Python",
      img: "python.jpg",
      desc: "lorem ipsum dolor",
      category: "Programming Language",
      price: "Free",
    },
    { // Седьмой товар
      id: 7,
      title: "Django",
      img: "django.jpg",
      desc: "lorem ipsum dolor",
      category: "FrameWork",
      price: "Free",
    },
    { // Восьмой товар
      id: 8,
      title: "Assembler",
      img: "Assembler.jpg",
      desc: "lorem ipsum dolor",
      category: "Programming Language - that is sooooo gooooooood",
      price: "Free",
    },
    { // Девятый товар
      id: 9,
      title: "Docker",
      img: "Docker.png",
      desc: "lorem ipsum dolor",
      category: "Container",
      price: "Free",
    },
    { // Десятый товар
      id: 10,
      title: "Kubernetes",
      img: "Kubernetes.webp",
      desc: "lorem ipsum dolor",
      category: "Container",
      price: "Free",
    },
    { // Одинадцатый товар
      id: 11,
      title: "Linux",
      img: "Linux.jpg",
      desc: "lorem ipsum dolor",
      category: "Operation System",
      price: "Free",
    }
  ]);

  const[orders, setOrders] = useState([]);
  
  const deleteElem=(id)=>{
    setOrders(orders.filter((el)=>el.id!==id));
  }

  // Если id в корзине нет, то товар добавлятся, а если есть, то не добавляется
  const addToOrder = (item) => {
    if(!orders.some((el) => el.id === item.id)) { // Сверяется id элемента, который мы хотим добавить, с элементом, которые есть в массиве
      setOrders([...orders, item]) // ...название массива, item - указыват, что добавляется элемент
    }
} 

  return (
    <div className = "wrapper">
      <Header orders = {orders} onDelete={deleteElem}/>
      <Items allItems = {items} onAdd = {addToOrder} /> {/*Переменная onAdd, которая принимает функцию addToOrder*/}
      <Footer />
    </div>
  );
}

export default App;
