import { Route, Routes } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/authentication' element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
