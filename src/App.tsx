import React, {useState} from 'react';
import './App.css';
import {PageEnum} from "./constants/page.enum";
import UserPage from "./pages/UserPage";
import CommentPage from "./pages/CommentPage";
import CarPage from "./pages/CarPage";

function App() {

  let [choice,setChoice] = useState<PageEnum>(PageEnum.USERS);

    return (
        <div>
          {choice === PageEnum.USERS && <UserPage/>}
          {choice === PageEnum.COMMENTS && <CommentPage/>}
          {choice === PageEnum.CARS && <CarPage/>}
        </div>
    );
}

export default App;
