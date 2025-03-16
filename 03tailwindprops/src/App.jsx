import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username: " puja",
  age: 20
}
let newArr = [1,2,3]

  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="chaiaurcode" btntext="Click me" photo="https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card username="puja jii" btntext="Buy me" photo="https://images.pexels.com/photos/6534391/pexels-photo-6534391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>

    </>
  )
}
//inside curly braces{} passing as a variable
export default App
