import { Routes, Route } from "react-router-dom"
import { Welcome, Home , Login , Register} from "./pages"

function App() {

  return (
      <div>
        <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        </Routes>
    </div>
  )
}

export default App
