import { useState } from 'react'
import './App.css'
import Bai1 from './components/bai1'
import Bai2 from './components/bai2'
import Bai3 from './components/bai3'
import Bai4 from './components/bai4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Bai4 />
  )
}

export default App
