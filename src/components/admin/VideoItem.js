import React from "react";
import { useHistory } from "react-router-dom";
import vidly from "../../apis/index";
import "../../styles/admin/VideoItem.css";

const VideoItem = ({ video, endPoint }) => {
  const history = useHistory();
  const onBtnClick = async () => {
    await vidly.delete(`/${endPoint}/${video._id}`);
    navigation();
  };

  const navigation = () => {
    if (endPoint === "tvShows") history.push(`/tv-shows`);
    else history.push("/movies");
  };

  return (
    <div className="admin-video-container">
      <h4>{video.title}</h4>
      <span className="genre">{video.genre.name} </span>
      <span className="date">{video.addDate}</span>
      <button onClick={onBtnClick}>Delete</button>
    </div>
  );
};

export default VideoItem;
