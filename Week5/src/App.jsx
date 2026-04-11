import AppRouter from './components/AppRouter'
import { BrowserRouter, Link } from 'react-router'
function App() {

  return (
    <>
   
    <BrowserRouter>
    <nav style={{
      display:'flex' , 
      gap:20
    }}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </nav>
        <AppRouter />
    </BrowserRouter>
    </>
  )
}

export default App
