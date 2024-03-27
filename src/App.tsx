import React from "react";
import {useState, useEffect, useContext, createContext} from "react";
import Header from "./components/Header/index.tsx";
import Items from "./components/Items/index.tsx";
import Footer from "./components/Footer/index.tsx";
import "./index.scss";
import Categories from "./components/Categories/index.tsx";
import ShowFullItem from "./components/ShowFullItem/index.tsx"
import { useAppContext } from "./useAppContext.tsx";

// const AppContext = createContext();

function App(): JSX.Element { // <--- Вот тут добавляю JSX.Element
  const {showFullItem} = useAppContext();

  return (
      <div className = "wrapper">
        <Header/>
        <Categories/>
        <Items/> {/*Переменная onAdd, которая принимает функцию addToOrder*/}
        {showFullItem && <ShowFullItem/>} {/*showFullItem - это useState, ShowFullItem - это компонент React. Если переменная false, то и компонент работать не будет*/}
        <Footer />
      </div>
  );
}

export default App;
