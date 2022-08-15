import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./post.css";

const Post = () => {
  return (
    <div className="post-wrapper">
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
            <MoreHorizIcon />
          </button>
        </div>
      </div>
      <div className="post-image"></div>
      <div className="post-bottom"></div>
    </div>
  );
};

export default Post;
