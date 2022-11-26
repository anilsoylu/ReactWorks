import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import "./siderbar.css";
import Skeleton from "../skeleton/Skeleton";

const Siderbar = ({ isLoading }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <MenuIcon className="menu-icon" />
        {!!isLoading ? (
          <Skeleton type="material" /* other type => menu */ />
        ) : (
          <>
            <div className="sidebar-item active">
              <HomeIcon />
              <span>Home</span>
            </div>
            <div className="sidebar-item">
              <ExploreIcon />
              <span>Explore</span>
            </div>
            <div className="sidebar-item">
              <SubscriptionsIcon />
              <span>Subscriptions</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Siderbar;
