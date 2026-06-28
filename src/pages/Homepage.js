import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";
import { useLocation } from "react-router-dom";

const Homepage = ({ favoritePhotos, toggleFavorite }) => {
  const [input, setInput] = useState("");

  //把圖片做成state-->因為要讓Search.js和Picture.js都可以使用,所以做了state lifting
  const [data, setData] = useState(null);

  //按下「更多圖片」時(已有在search欄位裡打上文字),要更改page的值(url後面的參數),以索取
  //更多相關的圖片
  const [page, setPage] = useState(Math.floor(Math.random() * 5) + 1);

  //取得「更多圖片」時,所用的state!
  //為了避免user在搜尋窗上打文字後,直接按「更多圖片」以產生搜尋窗上所打文字的圖片
  const [currentSearch, setCurrentSearch] = useState("");

  const location = useLocation();

  const auth = process.env.REACT_APP_PEXELS_API_KEY;

  //curated URL(精選圖片)
  const initialURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=16`;

  //我自己更改的(因為要是沒有輸入值,就按search,會導致bug)
  let searchURL = input
    ? `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=1`
    : `https://api.pexels.com/v1/curated?page=${page}&per_page=16`;

  const search = async (url) => {
    //每一次新的搜尋都從第一頁開始
    setPage(1);

    //看官方文件
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });

    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    console.log("page state目前的值: " + page);

    let newURL;

    setPage(page + 1);

    if (currentSearch === "") {
      //因為closure的問題,所以得在裡面寫page + 1,才能改變到page的值
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=16`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=16&page=${page + 1}`;
    }

    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });

    setData(data.concat(result.data.photos));
  };

  //初載頁面!
  //只要Homepage.js有被render,我們就要去生成圖片(也就是執行search())
  //所以一進到我們的網站自然就會看到圖片生成拉!

  useEffect(() => {
    const getInitialPictures = async () => {
      const result = await axios.get(initialURL, {
        headers: { Authorization: auth },
      });

      setData(result.data.photos);
    };

    getInitialPictures();

    //忽略Eslint的警告的寫法
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getInitialPictures = async () => {
      //回首頁時,清空搜尋狀態
      setInput("");
      setCurrentSearch("");

      //重新隨機選一個精選圖片頁數
      const randomPage = Math.floor(Math.random() * 5) + 1;
      setPage(randomPage);

      const url = `https://api.pexels.com/v1/curated?page=${randomPage}&per_page=16`;

      try {
        const result = await axios.get(url, {
          headers: { Authorization: auth },
        });

        setData(result.data.photos);
      } catch (error) {
        console.log("圖片載入失敗：", error);
      }
    };

    getInitialPictures();

    //location.key每次點擊Link導覽時會更新
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        input={input}
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />

      <div className="pictures">
        {/* React中非常常見也非常有名的技巧!!!!!
        (&&左邊如果是false(e.g. null)就不會去計算右邊;如果左邊是true才會繼續計算右邊) */}
        {data &&
          data.map((d) => {
            return (
              <Picture
                key={d.id}
                data={d}
                isFavorite={favoritePhotos.some(
                  (favoritePhoto) => favoritePhoto.id === d.id,
                )}
                toggleFavorite={toggleFavorite}
              />
            );
          })}
      </div>

      <div className="morePicture">
        <button className="loadMoreBtn" type="button" onClick={morePicture}>
          더 보기
        </button>
      </div>
    </div>
  );
};

export default Homepage;
