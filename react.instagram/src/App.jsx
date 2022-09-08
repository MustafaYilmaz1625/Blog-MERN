import { useState } from "react";
import Header from "./components/header/Header";
import Share from "./components/share/Share";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Messenger from "./pages/messenger/Messenger";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Header handleOpen={handleOpen} />
      <Share open={open} handleClose={handleClose} />
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Messenger/> */}
      {/* <Register/> */}
      <Login/>
    </div>
  );
}

export default App;
