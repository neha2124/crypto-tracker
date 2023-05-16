// import { Dashboard } from "@mui/icons-material";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Coin from "./pages/coinpage"
import Compare from "./pages/comapre"
import WatchList from "./pages/watchList";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ToastContainer/>
    <Router>
      <Routes>
     <Route path='/' element={<Home />}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/coin/:id" element={<Coin/>}/>
    <Route path="/compare" element={<Compare/>}/>
    <Route path="/watchList" element={<WatchList/>}/>
    </Routes>
    </Router>
     {/* <Footer />f */}
    </div>
  );
}

export default App;
