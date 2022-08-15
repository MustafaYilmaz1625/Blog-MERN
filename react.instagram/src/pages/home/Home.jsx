import Post from "../../components/post/Post";
import RightBox from "../../components/rightBox/RightBox";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="home-page">
          <div className="home-page-left">
            <div className="posts">
              <Post />
            </div>
          </div>
          <div className="home-page-right">
            <RightBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
