import React, {useContext, useState, useEffect} from "react";
import axios from "axios";

export interface AnyItem {
  item:any;
}
  

const AppContext=React.createContext<any>(null); // Задаю тип данных any, а значение null



export const useAppContext = () => {
    const context = useContext(AppContext) // Достаю переменные из функции из App.js и AppContext
  
    if(!context) {
        throw new Error("Ошибка получения в useAppContext"); // Данная функция вызывает ошибку, если данные из AppContext не пришли
    }

    return context;
}

export const AppProvider:React.FC<{children:React.ReactNode}> = ({children}) => { // React.FC - Указывает, что это компонент - Внутри ReactNode находятся строки, числа, логический(boolean), конструкторы и т.д.
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

    // Тут я указываю тип данных, чтобы TypeScript понимал, какие данные я ввёл
    const [items, setItems] = useState<any[]>([ // Добавляю any[] - чтобы TypeScript понимал тип данных
       
      ]);
      const[orders, setOrders] = useState<any[]>([]); // Добавляю тип данных any
      const [currentItems, setCurrentItems] = useState<any[]>([]); // Добавляю тип данных any
      const [showFullItem, setShowFullItem] = useState<Boolean>(false); // Добавляю тип данных boolean
      const [fullItem, setFullItem] = useState<any>({}); // Добавляю тип данных any - (Но возможно можно указать тип данных Object) 
    
      useEffect(()=>{ // тут ничего не указываю
        axios.get("http://localhost:3001/items").then(response => {
          setItems(response.data); // Передаю данный в setItems и указываю их как data - то есть данные
          chooseCategory("all"); // Передаю данные в chooseCategory
          setCurrentItems(response.data); // Передаю данные в setCurrentItems
        }) // get - Запрос на получение всех товаров, then помогает передать все данный в функции, методы и т.д.
        // Если я пишу get - catch - то я между ними не ставлю ; - иначе условие не будет работать
        .catch(error => {
          console.log("Ошибка при загрузке данных", error);
        }) // Случай, когда программа не сработала, то есть она показыает ошибку или сообщение, которое я напишу, это как else - в логическом условии if - else if - else
      }, []); // Оставляю скобки пустыми, чтобы заработала сортировка
      
      const deleteElem=(id:number)=>{ // Тут указываю number
        setOrders(orders.filter((el)=>el.id!==id));
      }
    
      // Если id в корзине нет, то товар добавлятся, а если есть, то не добавляется
      const addToOrder = (item:any) => { // Указываю тип any
        if(!orders.some((el) => el.id === item.id)) { // Сверяется id элемента, который мы хотим добавить, с элементом, которые есть в массиве
          setOrders([...orders, item]) // ...название массива, item - указыват, что добавляется элемент
        }
    } 
    
      // const checkCategory=()=>{
        // if(items.category == Categories.key)
      // }
    
      const chooseCategory=(category:string)=>{ // Добавляю тип данных для понимания TS - string
        if(category==="all") {
          setCurrentItems(items);
        } else {
          setCurrentItems(items.filter((el) => el.category === category))
        }
      }
    
      const onShowItem=(item:any)=> { // Добавляю тип данных для понимания TS - any
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
        onShowItem,
        
      }

      // указываю return
      //App.js тоже копмонент, но для него это тоже нужно передавать
      // Теперь если я захочу достать компонент, то я смогу к нему подключиться и взять то, что мне нужно
      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}

export default AppProvider;