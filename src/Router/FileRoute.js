import {Link, Routes, Route,Navigate} from 'react-router-dom'
import Home from './Home';
import Blogs from './Blogs';
import Blog from './Blog';
import Navigation from './Navigation';
import Root from "./Root"
import BlogsLayout from "./BlogsLayout"
import ArchivedBlogs from "./ArchivedBlogs"
import BlogRoutes from "./BlogRoutes"
import Hume from  "./Hume"
import ErrorPage from "./ErrorPage"

const FileRoute=()=>{
return (
<div>
    <Navigation />
      <Routes>
        <Route path='/home'  element={<Home/>}></Route>
        <Route path='/'  element={<Root/>}></Route>
        {/*<Route path='/blogs' element={<BlogsLayout/>}>
            <Route index element={<Blogs/>}></Route>
            <Route path=':blogId'  element={<Blog/>}></Route>
            <Route path='archive_blogs' element={<ArchivedBlogs/>}></Route>
        </Route>*/}
        <Route path="/hume" element={<Navigate to="/home"></Navigate>}> </Route>
        <Route path="/hume1" element={<Link to="/home">Manually trigger</Link>}> </Route>
        <Route path='/blogs/*' element={<BlogRoutes />}>
        </Route>
        <Route path='/navlink' element={<Blogs/>}></Route>
        <Route path='/navlinkcss' element={<Blogs/>}></Route>
        <Route path='/ErrorPage*' element={<ErrorPage />}></Route>
      </Routes>
</div>
)
}

export default FileRoute

