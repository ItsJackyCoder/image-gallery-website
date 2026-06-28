import React from "react";

const Search = ({ search, setInput, input }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //防止表單送出後重新整理頁面
  };

  return (
    <div className="search">
      <form className="searchBox" onSubmit={submitHandler}>
        <input
          value={input}
          type="text"
          placeholder="사진을 검색해 보세요"
          onChange={inputHandler}
        />

        <button onClick={search} type="submit" aria-label="搜尋">
          🔍
        </button>
      </form>
    </div>
  );
};

export default Search;
