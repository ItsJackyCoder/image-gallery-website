import React from "react";
import Picture from "../components/Picture";

const Favorite = ({ favoritePhotos, toggleFavorite }) => {
  return (
    <div
      className={favoritePhotos.length === 0 ? "" : "pictures"}
      style={{ minHeight: "100vh" }}
    >
      {favoritePhotos.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "20px" }}>
          No favorite photos yet
        </p>
      ) : (
        favoritePhotos.map((photo) => {
          return (
            <Picture
              key={photo.id}
              data={photo}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          );
        })
      )}
    </div>
  );
};

export default Favorite;
