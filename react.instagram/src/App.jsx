import { useState } from "react";
import Header from "./components/header/Header";
import Share from "./components/share/Share";
import Messenger from "./pages/messenger/Messenger";
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
      <Messenger/>
    </div>
  );
}

export default App;
