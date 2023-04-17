import './App.css';
import Cars from "./components/Cars/Cars";
import UserForm from "./components/UserForm/UserForm";
import UserComment from "./components/UserComment/UserComment";

function App() {

  return (
    <div>
      <Cars/>
        <hr/>
      <UserForm/>
        <hr/>
      <UserComment/>
    </div>
  );
}

export default App;
