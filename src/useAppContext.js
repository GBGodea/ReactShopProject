import React, {useContext, useState, useEffect} from "react";

const AppContext=React.createContext();

export const useAppContext = () => {
    const context = useContext(AppContext) // Достаю переменные из функции из App.js и AppContext

    if(!context) {
        throw new Error("Ошибка получения в useAppContext"); // Данная функция вызывает ошибку, если данные из AppContext не пришли
    }

    return context;
}

export const AppProvider = ({children}) => { // {children} - указывает, что и сколько получает, и чтобы не писать много параметров, можно просто заключить в фигурные скобки и тогда сколько бы функция не принимала параметров, она будет принимать их все
    /*
     items, // Переменная
      setItems, // Переменная
      orders, // Переменная
      setOrders, // Переменная
      currentItems, // Переменная
      setCurrentItems, // Переменная
      showFullItem, // Переменная
      setShowFullItem, // Переменная
      fullItem, // Переменная
      setFullItem, // Переменная
      deleteElem, // Функция
      addToOrder, // Функция
      chooseCategory // Функция
      Вот это всё передаётся
       */
      //AppContext - если вызывается, то он понимает, что сюда передаётся

    // Просто копирую все useState переменные (Дополнительно: А пока что для теста я также добавляю все переменные и функции)
    // Тут я данные получил
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
          category: "Programming Language",
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
      const [currentItems, setCurrentItems] = useState([]);
      const [showFullItem, setShowFullItem] = useState(false);
      const [fullItem, setFullItem] = useState({});
    
      useEffect(()=>{
        setCurrentItems(items);
      }, [items]);
      
      const deleteElem=(id)=>{
        setOrders(orders.filter((el)=>el.id!==id));
      }
    
      // Если id в корзине нет, то товар добавлятся, а если есть, то не добавляется
      const addToOrder = (item) => {
        if(!orders.some((el) => el.id === item.id)) { // Сверяется id элемента, который мы хотим добавить, с элементом, которые есть в массиве
          setOrders([...orders, item]) // ...название массива, item - указыват, что добавляется элемент
        }
    } 
    
      // const checkCategory=()=>{
        // if(items.category == Categories.key)
      // }
    
      const chooseCategory=(category)=>{
        if(category==="all") {
          setCurrentItems(items);
        } else {
          setCurrentItems(items.filter((el) => el.category === category))
        }
      }
    
      const onShowItem=(item)=> {
        setFullItem(item);
        setShowFullItem(!showFullItem);
      }

      // Тут я передаю эти данные
      // Тут я раздаю все переменные и функции
      const contextValue={
        items, // Переменная
        setItems, // Переменная
        orders, // Переменная
        setOrders, // Переменная
        currentItems, // Переменная
        setCurrentItems, // Переменная
        showFullItem, // Переменная
        setShowFullItem, // Переменная
        fullItem, // Переменная
        setFullItem, // Переменная
        deleteElem, // Функция
        addToOrder, // Функция
        chooseCategory, // Функция
        onShowItem
      }

      // указываю return
      //App.js тоже копмонент, но для него это тоже нужно передавать
      // Теперь если я захочу достать компонент, то я смогу к нему подключиться и взять то, что мне нужно
      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}

export default AppProvider;