import './App.css';
import Posts from "./components/Posts/Posts";
import { useState} from "react";
import FullPost from "./components/FullPost/FullPost";

// з jsonplaceholder отримати всі пости в компоненту Post1.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Post1.js ви покажете детальну інфомацію про пост(всю інфу)
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
// #Advance
// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)
function App() {
let [chosenPost, setChosenPost] = useState({});
    const lift = (obj) => {
        setChosenPost({...obj})
    }

  return (

      <div>
              <h1>HELLO OKTEN HOMEWORK 2</h1>
          <div className={'main'}>
              <div className={'left'}><Posts lift={lift}/></div>
              <div className={'right'}><FullPost item={chosenPost}/></div>
          </div>
      </div>
  );
}

export default App;
