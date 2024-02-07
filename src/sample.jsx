import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import Navi from './components/myNav'
import Contents from './components/myContents'
import Rightbar from './components/myRightBar'
import Leftbar from './components/myLeftBar'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navi/>
    {/* <Rightbar/> */}
    <Contents/>
    {/* <Leftbar/> */}
  </React.StrictMode>,
)
