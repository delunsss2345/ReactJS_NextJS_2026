import Button from "./components/Button"
import "./index.css"
function App() {
  return (
    <div className="d-flex">
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
    </div>
  )
}

export default App
