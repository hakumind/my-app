import React, { useState } from "react";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import RewardAnimation from "./RewardAnimation";
import { sampleCalendarData, sampleActivityData } from "./data";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("girl");
  

  // Pixabay API から画像を取得
  const fetchImages = async () => {
    const API_KEY = process.env.REACT_APP_PIXABAY_KEY;
    console.log("API_KEY:", API_KEY);
    try {
      const res = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`
      );
      setImages(res.data.hits);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pixabay 画像検索</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="検索ワード"
      />
      <button onClick={fetchImages}>画像を取得</button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.webformatURL}
            alt={img.tags}
            style={{ width: "200px", margin: "5px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
