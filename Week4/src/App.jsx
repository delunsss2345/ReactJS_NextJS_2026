import { Provider } from 'react-redux'
import './App.css'
import Bai5 from './components/baitap5'
import { store } from './store'
import Bai4 from './components/bai4'

function App() {
  return (
    <Provider store={store}>
      <Bai4 />
    </ Provider >

  )
}

export default App
