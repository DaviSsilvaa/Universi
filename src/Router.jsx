import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedAxios from './pages/FeedAxios/FeedAxios.js';
import EditPost from './pages/EditPost/EditPost.js';
import PostForms from './pages/PostForms/PostForms.js'
import Login from './pages/LoginAndRegister/Login.js';
import Register from './pages/LoginAndRegister/Register.js';

export function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/> 
                <Route path='/post' element={<PostForms/>}/>
                <Route path='/edit/:changeId' element={<EditPost/>}/>
                <Route path='/feed' element={<FeedAxios/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<h1>404 Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}