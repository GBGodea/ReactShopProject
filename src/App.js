import React from "react";
import {useState, useEffect, useContext, createContext} from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "./index.scss";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { useAppContext } from "./useAppContext";

// const AppContext = createContext();

function App() {
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
