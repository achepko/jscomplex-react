import './App.css';
import Posts from "./components/Posts/Posts";
import Launches from "./components/Launches/Launches";
import Users from "./components/Users/Users";
import {useState} from "react";
import User from "./components/User/User";
import UserPosts from "./components/UserPosts/UserPosts";

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

    let [userId, setUserId] = useState(null);

  return (

      <div>
              <h1>HELLO OKTEN HOMEWORK 2</h1>
          <div className={'main'}>
              <div className={'left'}><Posts /></div>
          </div>
          <hr/>
          <div className="main2">
              <Launches/>
          </div>
          <div className="main3">
              <Users setUserId={setUserId}/>
              {userId && <UserPosts userId={userId}/>}
          </div>
      </div>
  );
}

export default App;
