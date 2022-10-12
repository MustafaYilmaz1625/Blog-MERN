import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios"
import "./post.css";

const Post = ({ top, bottom, post }) => {
  const[user,setUser]= useState([])

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users?userId=" + post.userId);
      setUser(res.data)
    }
    getUser();
  }, [post.userId])
  console.log(user);

  return (
    <div className="post-wrapper">
      {top && (
        <div className="post-header">
          <div className="post-header-left">
            <a href="/">
              <Avatar
                src="https://res.cloudinary.com/techprivil/image/upload/v1655937337/instagram-clone/bhd2k9blnfvdrpismvy0.jpg"
                sx={{ width: 32, height: 32 }}
              />
            </a>
            <a href="/" className="profile-username">
              eminbasbayan
            </a>
          </div>
          <div className="post-header-right">
            <button>
              <MoreHorizIcon className="post-like-icon active" />
            </button>
          </div>
        </div>
      )}
      <div className="post-image">
        <img src="/images/post/1.png" alt="Post Img" />
      </div>

      {bottom && (
        <div className="post-bottom">
          <div className="post-like">
            <button>
              <FavoriteIcon className="post-like-icon active" />
            </button>
          </div>
          <span className="post-like-count">0 like</span>
          <div className="post-content">
            <a href="/" className="profile-username">
              eminbasbayan
            </a>

            <span className="post-text">
              {" "}Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>

          <div className="post-time">1 dk önce</div>
        </div>
      )}
    </div>
  );
};

export default Post;
