import { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import RightBox from "../../components/rightBox/RightBox";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"
import "./home.css";
import { useContext } from "react";

const Home = () => {
  const [timelinePosts, setTimelinePosts] = useState([]);
  const { user } = useContext(AuthContext)
  // console.log({user})

  useEffect(() => {
     const getPosts = async () => {
       const res = await axios.get("/posts/timeline/"+ user._id);
       setTimelinePosts(res.data)
     }
     getPosts();
  }, [user._id])


  
  return (
 
      <div className="container">
        <div className="home-page">
          <div className="home-page-left">
            <div className="posts">
              {timelinePosts.map((post) => (
                <Post top bottom key={post._id} post={post} />
              ))}    
            </div>
          </div>
          <div className="home-page-right">
            <RightBox />
          </div>
        </div>
      </div>
  
  );
};

export default Home;
