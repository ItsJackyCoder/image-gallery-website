import React from "react";

const Picture = ({ data, isFavorite, toggleFavorite }) => {
  const favoriteHandler = () => {
    toggleFavorite(data);
  };

  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />

        {/* 收藏圖片功能 */}
        <button
          className={`favoriteButton ${isFavorite ? "isFavorite" : ""}`}
          type="button"
          onClick={favoriteHandler}
          aria-label={isFavorite ? "取消收藏圖片" : "收藏圖片"}
          aria-pressed={isFavorite}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="photoDescription">
        <p>{data.photographer}</p>

        <a target="_blank" href={data.src.large} rel="noreferrer">
          다운로드
        </a>
      </div>
    </div>
  );
};

export default Picture;
