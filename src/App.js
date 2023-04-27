import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import PostPage from "./pages/PostPage";
import CommentPage from "./pages/CommentPage";
import CatDogPage from "./pages/CatDogPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'posts'}/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'comments'} element={<CommentPage/>}/>
                    <Route path={'cats_dogs'} element={<CatDogPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
