import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedAxios from './pages/FeedAxios/FeedAxios.js';
import EditPost from './pages/EditPost.js';
import PostForms from './pages/PostForms/PostForms.js'
import Comment from './pages/Comment/Comment.js';

export function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FeedAxios/>}/> 
                <Route path='/post' element={<PostForms/>}/>
                <Route path='/edit/:changeId' element={<EditPost/>}/>
                <Route path='/comments/:postId' element={<Comment/>}/>
                <Route path='*' element={<h1>Page not found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}