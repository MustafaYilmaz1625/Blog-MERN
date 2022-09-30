import { Avatar, Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import "./rightBox.css";

const RightBox = () => {
  return (
    <div className="right-box">
      <div className="account">
        <a href="/">
          <Avatar src="/images/person/0.png" sx={{ width: 56, height: 56 }} />
        </a>
        <div className="account-titles">
          <a href="/">eminbasbayan</a>
          <span>Emin Başbayan</span>
        </div>
      </div>
      <span className="friends-title">My Friends</span>
      <ul className="friends-list">
        <li className="friend-item">
          <div className="friend-item-left">
            <a href="/">
              <Avatar
                src="/images/person/2.png"
                sx={{ width: 40, height: 40 }}
              />
            </a>
            <div className="friend-username">
              <a href="/">bedirhan</a>
              <span>Bedirhan Başbayan</span>
            </div>
          </div>
          <div className="friend-item-right">
            <Button
              variant="contained"
              size="small"
              endIcon={<ArrowCircleRightOutlinedIcon />}
            >
              Profile Git
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RightBox;
