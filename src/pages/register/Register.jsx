import {useState} from "react"
import { Button, TextField } from "@mui/material"
import axios from "axios";
import "./register.css"
import { Link } from "react-router-dom"

const Register = () => {
      const [fullName,setFullName]=useState("")
      const [username,setUsername]=useState("")
      const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
      const [passwordAgain,setPasswordAgain]=useState("")
      const [profilePicture,setProfilePicture]=useState(null)
      const [bio,setBio]=useState("")

      const handleSubmit = async (e) => {
            e.preventDefault();
            if (password !== passwordAgain) {
                  alert("Passwords don't match!");
            } else {
                  const user = {
                        fullName,
                        username,
                        email,
                        password,
                        bio,
                  };

                  if (profilePicture) {
                        const data = new FormData();
                        const fileName = Date.now() + profilePicture.name;
                        data.append("name", fileName);
                        data.append("file", profilePicture);
                        user.profilePicture = fileName;
                        try {
                              await axios.post("/upload", data);
                        } catch (err) {
                              console.log(err);
                        }
                  }
                  
            }
      };


  return (
    <div className="auth-page">
        <h1>Welcome to Social Media App</h1>
              <form className="form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-input">
                          <TextField required type="text" label="Full Name" variant="outlined" onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="form-input">
                          <TextField required type="text" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-input">
                          <TextField required type="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-input">
                          <TextField required type="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-input">
                          <TextField
                                required
                                type="password"
                                label="Password Confirm"
                                variant="outlined"
                                onChange={(e) => setPasswordAgain(e.target.value)}
                          />
            </div>
            <div className="form-input">
                  <TextField  required type="file"  variant="outlined" />
            </div>
              <div className="form-input">
                          <TextField required type="text" label="Biography" variant="outlined" onChange={(e) => setProfilePicture(e.target.files[0])} />
              </div>
                    <div className="form-input">
                          <TextField
                                required
                                type="text"
                                label="Biography"
                                variant="outlined"
                                onChange={(e) => setBio(e.target.value)}
                          />
                    </div>
              <Link to="/login" href="/" className="auth-link"> Back to Login</Link>
              <Button type="submit" variant="contained" color="success">Register</Button>
        </form>
    </div>
  )
}

export default Register