import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/Homepage";
import Favorite from "./pages/Favorite";
import Page404 from "./pages/Page404";
import "./styles/style.css";

function App() {
  //收藏愛心功能(從Homepage.js state lift到這裡)
  const [favoritePhotos, setFavoriteIds] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favoritePhotos");

      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("讀取收藏資料失敗", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favoritePhotos", JSON.stringify(favoritePhotos));
  }, [favoritePhotos]);

  const toggleFavorite = (photo) => {
    setFavoriteIds((previousPhotos) => {
      const alreadyFavorite = previousPhotos.some(
        (favoritePhoto) => favoritePhoto.id === photo.id,
      );

      if (alreadyFavorite) {
        //已經收藏:把該圖片id移除(等於是說取消收藏的意思,因為原本已經在收藏清單裡了)
        return previousPhotos.filter(
          (favoritePhoto) => favoritePhoto.id !== photo.id,
        );
      }

      //還沒收藏:把該圖片id加進去
      return [...previousPhotos, photo];
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <HomePage
                favoritePhotos={favoritePhotos}
                toggleFavorite={toggleFavorite}
              />
            }
          ></Route>

          <Route
            path="favorite"
            element={
              <Favorite
                favoritePhotos={favoritePhotos}
                toggleFavorite={toggleFavorite}
              />
            }
          ></Route>
        </Route>

        {/* 其他所有的request都會進到這個route */}
        {/* 我把它移出Layout那個route,這樣就不會套用它設定的版型 */}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
