import { Provider } from 'react-redux'
import './App.css'
import Bai5 from './components/baitap5'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <Bai5 />
    </ Provider >

  )
}

export default App
