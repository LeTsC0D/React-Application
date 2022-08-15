import {Link, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Blogs from './Blogs';
import Blog from './Blog';
import Navigation from './Navigation';
import Root from "./Root"
import BlogsLayout from "./BlogsLayout"
import ArchivedBlogs from "./ArchivedBlogs"

const FileRoute=()=>{
return (
<div>
    <Navigation />
      <Routes>
        <Route path='/home'  element={<Home/>}></Route>
        <Route path='/root'  element={<Root/>}></Route>
        <Route path='/blogs' element={<BlogsLayout/>}>
            <Route index element={<Blogs/>}></Route>
            <Route path=':blogId'  element={<Blog/>}></Route>
            <Route path='archive_blogs' element={<ArchivedBlogs/>}></Route>
        </Route>

        <Route path='/navlink'  element={<Blogs/>}></Route>
        <Route path='/navlinkcss'  element={<Blogs/>}></Route>
        <Route path='*' element={<div>Error Page</div>} ></Route>
      </Routes>
</div>
)
}

export default FileRoute

