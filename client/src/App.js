import "./App.css";
 import Register from "./pages/Register";
 import SignIn from "./pages/SignIn";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRender from "./pages/PageRender";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <input type="checkbox" id="theme" /> */}
        <div className="App">
          <div className="main">
            <Routes>
            
               <Route path="/" element={<Register />} />
              <Route path="/sign" element={<SignIn />} />
              <Route exact path="/:page" element={<PageRender />}   />
              <Route exact path="/:page/:id" element={<PageRender />}   />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

