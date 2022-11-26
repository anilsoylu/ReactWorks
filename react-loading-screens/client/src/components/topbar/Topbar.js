import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./topbar.css";
import Skeleton from "../skeleton/Skeleton";

function Topbar({ isLoading }) {
  return (
    <div className="topbar">
      <div className="top-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/159px-YouTube_full-color_icon_%282017%29.svg.png"
          alt=""
          className="logo"
        />
        <span className="logo-text">Youtube</span>
      </div>
      <div className="top-center">
        <div className="top-search">
          <input type="text" placeholder="Search.." />
          <div className="top-search-icon-container">
            <SearchIcon className="top-search-icon" />
          </div>
          <MicIcon />
        </div>
      </div>
      <div className="top-right">
        {!!isLoading ? (
          <Skeleton type="top" />
        ) : (
          <>
            <VideoCallIcon className="top-icon" />
            <AppsIcon className="top-icon" />
            <NotificationsNoneIcon className="top-icon" />
            <img
              className="top-img"
              src="https://pbs.twimg.com/profile_images/1313613207504916481/e08BdeFu_400x400.jpg"
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Topbar;
