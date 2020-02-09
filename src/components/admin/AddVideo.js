import React, { useEffect, useState } from "react";
import vidly from "../../apis/index";
import history from "../../history";
import "../../styles/admin/AddVideo.css";

const AddVideo = () => {
  const [genres, setGenres] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [genre, setGenre] = useState("");
  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const { data } = await vidly.get("/genres");
    setGenres(data);
  };

  const renderGenres = () => {
    return genres.map(genre => {
      return (
        <option key={genre._id} value={genre._id}>
          {genre.name}
        </option>
      );
    });
  };

  const onFormSubmit = async e => {
    const numPrice = Number(price);
    e.preventDefault();
    try {
      const newVideo = {
        title,
        price: numPrice,
        genreId: genre
      };
      const { data } = await vidly.post(`/${category}`, newVideo);
      if (data) {
        navigation();
      }
    } catch (ex) {
      throw new Error(ex);
    }
  };

  const navigation = () => {
    if (category === "tvShows") history.push("/tv-shows");
    else history.push("/movies");
  };

  return (
    <>
      <form className="add-video-form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="category">Category: </label>
          <select
            required
            onChange={e => {
              setCategory(e.target.value);
            }}
          >
            <option>Select Category</option>
            <option value="tvShows">Tv-show</option>
            <option value="movies">Movie</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="title">Title: </label>
          <input
            required
            type="text"
            id="title"
            onChange={e => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="field">
          <label htmlFor="price">Price: </label>
          <input
            required
            type="text"
            id="price"
            onChange={e => {
              setPrice(e.target.value);
            }}
            value={price}
          />
        </div>
        <div className="field">
          <label htmlFor="genre">Genre: </label>
          <select
            required
            onChange={e => {
              setGenre(e.target.value);
            }}
          >
            <option>Select Genre</option>
            {renderGenres()}
          </select>
        </div>
        <button>+</button>
      </form>
    </>
  );
};

export default AddVideo;
