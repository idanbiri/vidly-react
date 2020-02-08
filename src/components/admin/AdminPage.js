import React, { useState, useEffect } from "react";
import Button from "./Button";
import VideoItem from "./VideoItem";
import "../../styles/admin/AdminPage.css";

const AdminPage = () => {
  const [videos, setVideos] = useState([]);
  const [endPoint, setEndPoint] = useState("");

  const onVideosChange = (videos, endPoint) => {
    setVideos(videos);
    setEndPoint(endPoint);
  };

  useEffect(() => {}, [videos, endPoint]);

  const renderVideoItems = () => {
    return videos.map(video => {
      return <VideoItem video={video} endPoint={endPoint} key={video._id} />;
    });
  };

  return (
    <div className="admin-page-container">
      <div className="admin-buttons">
        <Button
          text="Movies"
          fetchTo="movies"
          onVideosChange={onVideosChange}
          route="movies"
        />
        <Button
          text="Tv-shows"
          fetchTo="tvShows"
          onVideosChange={onVideosChange}
          route="tv-shows"
        />
      </div>
      <div className="vidoes-items-container">{renderVideoItems()}</div>
    </div>
  );
};

export default AdminPage;
