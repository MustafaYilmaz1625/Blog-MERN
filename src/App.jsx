import { useState } from "react";
import Header from "./components/header/Header";
import Share from "./components/share/Share";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Share open={open} handleClose={handleClose} />
      <Router>
        {<Header handleOpen={handleOpen} />}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile/:username" element={<Profile />}/>
          <Route path="/messenger" element={<Messenger />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
