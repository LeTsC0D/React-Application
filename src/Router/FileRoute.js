import {Link, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Blogs from './Blogs';
import Blog from './Blog';
import Navigation from './Navigation';
import Root from "./Root"

const FileRoute=()=>{
return (
<div>
    <Navigation />


      <Routes>
        <Route path='/home'  element={<Home/>}></Route>
        <Route path='/root'  element={<Root/>}></Route>
        <Route path='/blogs'  element={<Blogs/>}></Route>
        <Route path='/blogs/:blogId'  element={<Blog/>}></Route>
        <Route path='*' element={<div>Error Page</div>} ></Route>
      </Routes>
</div>
)
}

export default FileRoute

