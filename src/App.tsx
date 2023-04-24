import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import Post from "./components/Post/Post";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'albums'}/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
