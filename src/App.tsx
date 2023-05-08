import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarPage, PostPage, UserPage} from "./pages";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'posts'} element={<PostPage/>}/>
                <Route path={'cars'} element={<CarPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
