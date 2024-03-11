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
      price: "Free",
    }, 
    { // Второй товар
      id: 2,
      title: "NodeJS",
      img: "NodeJS.png",
      desc: "lorem ipsum dolor",
      category: "FrameWork",
      price: "Free", 
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


  
  return (
    <div className = "wrapper">
      <Header />
      <Items allItems = {items} />
      <Footer />
    </div>
  );
}

export default App;
