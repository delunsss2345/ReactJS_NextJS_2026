import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './configs/config'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
