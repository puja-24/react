// import { StrictMode } from 'react'
// import React from 'react';
// import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Import ReactDOM properly




//app ak function hai so or ak function create krte h yeha
function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"


const reactElement = React.createElement(
  'a',
  {href:'https:google.com',target:'_blank'},//attributes
  'click me to visit google',
  anotherUser
)

// ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    //direct MyApp likh ke v run krwa skte h
    // <ReactElement />
    // anotherElement
//     reactElement
// )


// ✅ Correct usage of ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
 reactElement
 
  // <React.StrictMode>
  //   {reactElement}
  // </React.StrictMode>
);
