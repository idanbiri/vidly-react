import React, { useState, useEffect, useContext } from "react";
import Button from "./Button";
import VideoItem from "./VideoItem";
import AddVideo from "./AddVideo";
import AddVideoBtn from "./AddVideoBtn";
import UserStatusContext from "../../contexts/UserStatus";
import UserInfoContext from "../../contexts/UserInfo";
import "../../styles/admin/AdminPage.css";

const AdminPage = () => {
  const { userStatus } = useContext(UserStatusContext);
  const { userInfo } = useContext(UserInfoContext);
  const [videos, setVideos] = useState([]);
  const [endPoint, setEndPoint] = useState("");
  const [display, setDisplay] = useState("");

  const onVideosChange = (videos, endPoint) => {
    setVideos(videos);
    setEndPoint(endPoint);
    setDisplay("videoItems");
  };

  const onDisplayFormChange = () => {
    setDisplay("addVideo");
  };

  useEffect(() => {}, [videos, endPoint]);

  const renderVideoItems = () => {
    return videos.map(video => {
      return <VideoItem video={video} endPoint={endPoint} key={video._id} />;
    });
  };

  const displayComponents = () => {
    switch (display) {
      case "videoItems":
        return (
          <div className="vidoes-items-container">{renderVideoItems()}</div>
        );
      case "addVideo":
        return (
          <div className="add-video-form-container">
            <AddVideo />
          </div>
        );
      default:
        return (
          <div className="add-video-form-container">
            <AddVideo />
          </div>
        );
    }
  };

  const displayAdminPage = () => {
    if (userStatus && userInfo.isAdmin) {
      return (
        <div className="admin-page-container">
          <div className="admin-buttons">
            <Button
              text="Movies"
              fetchTo="movies"
              onVideosChange={onVideosChange}
            />
            <Button
              text="Tv-shows"
              fetchTo="tvShows"
              onVideosChange={onVideosChange}
            />
            <AddVideoBtn onDisplayFormChange={onDisplayFormChange} />
          </div>
          {displayComponents()}
        </div>
      );
    }
    return (
      <h1 style={{ textAlign: "center", paddingTop: "100px" }}>
        You must be an Admin to see this page
      </h1>
    );
  };
  return displayAdminPage();
};

export default AdminPage;
