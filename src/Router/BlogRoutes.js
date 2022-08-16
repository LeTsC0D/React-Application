import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Blogs from './Blogs';
import Blog from './Blog';
import ArchivedBlogs from "./ArchivedBlogs"
import BlogsLayout from "./BlogsLayout"

export default function BlogRoutes(){
return(
<>
<Routes>
    <Route element={<BlogsLayout/>}>
        <Route index element={<Blogs/>}></Route>
        <Route path=":blogId" element={<Blog/>}></Route>
        <Route path='archive_blogs' element={<ArchivedBlogs/>}></Route>
    </Route>
</Routes>
</>
)
}




