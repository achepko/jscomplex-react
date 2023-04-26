import './App.css';
import Cars from "./components/Cars/Cars";
import UserForm from "./components/UserForm/UserForm";
import UserComment from "./components/UserComment/UserComment";
import CarForm from "./components/CarForm/CarForm";

function App() {

    return (
        <div>
            <CarForm/>
            <Cars/>
            <hr/>
            <UserForm/>
            <hr/>
            <UserComment/>
        </div>
    );
}

export default App;
