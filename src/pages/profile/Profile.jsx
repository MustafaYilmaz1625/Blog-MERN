import { useContext, useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import  Post  from "../../components/post/Post";
import { AuthContext } from "../../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";
 
const Profile = () => {
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [followed, setFollowed] = useState();
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const username = useParams().username;

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get("/users?username=" + username);
            setUser(res.data);
        };
        getUser();
        setFollowed(currentUser.followings.includes(user?._id));
    }, [username, currentUser.followings, user?._id]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get("/posts/profile/" + username);
            setPosts(res.data);
        };
        getPosts();
    }, [username]);

    return (
        <div className="container">
            <div className="profile-page">
                <div className="profile-head">
                    <div className="head-left">
                        <Avatar
                            src={"/images/person/0.png"}
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <div className="head-right">
                        <div className="head-right-top">
                            <span className="profile-page-username">eminbasbayan</span>
                            <div className="profile-page-buttons">
                                <Button variant="contained" size="small">
                                    Düzenle
                                </Button>
                                <button>
                                    <SettingsOutlinedIcon />
                                </button>
                                <button>
                                    <LogoutOutlinedIcon color="error" />
                                </button>
                            </div>
                        </div>
                        <div className="head-right-center">
                            <div className="post-count">
                                <b>1</b>
                                <span>posts</span>
                            </div>
                            <div className="follower-count">
                                <b>1</b>
                                <span>followers</span>
                            </div>
                            <div className="following-count">
                                <b>1</b>
                                <span>followings</span>
                            </div>
                        </div>
                        <div className="head-right-bottom">
                            <b>Emin Basbayan</b>
                            <span>I am a Web Dev.</span>
                        </div>
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-nav-tabs">
                        <button className="active">
                            <GridOnOutlinedIcon />
                            <span>POSTS</span>
                        </button>
                        <button>
                            <VideoLibraryOutlinedIcon />
                            <span>VIDEOS</span>
                        </button>
                        <button>
                            <BookmarkAddOutlinedIcon />
                            <span>SAVE</span>
                        </button>
                        <button>
                            <AccountBoxOutlinedIcon />
                            <span>TAGGED</span>
                        </button>
                    </div>
                    <div className="profile-post-grid">
                     {posts.map((post) => (
                         <div className="grid-post" key={post._id}>
                                <Post  post={post}/>
                            <div className="like-icon-wrapper">
                                <FavoriteIcon className="like-icon" />
                                <b>1</b>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile