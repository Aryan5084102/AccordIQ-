import { Routes } from "react-router-dom"
import Home from "./Home"
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContractDetail from "./component/page/ContractDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/details/:name' element={<ContractDetail />}  />
      </Routes>
    </Router>

    // <>
    //   <Home />
    // </>
  )
}

export default App