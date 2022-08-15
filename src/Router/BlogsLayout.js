import React from 'react'
import {useParams, Link, Outlet} from 'react-router-dom'

//To avoid same code to come over different page again
//we use BlogLayout to appear in all page
export default function BlogsLayout() {
  return (
    <>
    <nav>
        <ul>
          <li>
              <Link to="/blogs/3">3rd Blog</Link>
          </li>
          <li>
              <Link to="/blogs/4">4th Blog</Link>
          </li>
          <li>
              <Link to="/blogs/5">5th Blog</Link>
          </li>
        </ul>
    </nav>
    {/* To display the child content we use outlet */}
    <Outlet context={{name:"shashank"}}/>
    <h1>After Outlet</h1>
    </>
  )
}
