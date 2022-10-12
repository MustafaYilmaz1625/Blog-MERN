import { useEffect, useState, useContext } from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import TimeAgo from 'react-timeago'
import turkishStrings from 'react-timeago/lib/language-strings/tr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"
import "./post.css";

const Post = ({ top, bottom, post }) => {
  const[user,setUser]= useState([]);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const formatter = buildFormatter(turkishStrings)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users?userId=" + post.userId);
      setUser(res.data)
    }
    getUser();
  }, [post.userId])

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const likeHandler = async () => {
    try {
      await axios.put("/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };


  return (
    <div className="post-wrapper">
      {top && (
        <div className="post-header">
          <div className="post-header-left">
            <Link to={"/profile/" + user.username}>
              <Avatar
                src={user.profilePicture && PF + user.profilePicture}
                sx={{ width: 32, height: 32 }}
              />
            </Link>
            <Link to={"/profile/" + user.username} className="profile-username">
             {user.username}
            </Link>
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
            <button onClick={likeHandler}>
              <FavoriteIcon className={`post-like-icon ${isLiked && "active"}`} />
            </button>
          </div>
          <span className="post-like-count">{like} {like >1 ? "likes" : "like"} </span>
          <div className="post-content">
            <Link to={"/profile/" + user.username} className="profile-username">
              {user.username}
            </Link>

            <span className="post-text">
              {" "}{post.desc}
            </span>
          </div>

          <div className="post-time">
            <TimeAgo date={post.createdAt} formatter={formatter} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
