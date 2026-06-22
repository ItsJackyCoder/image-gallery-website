import React from "react";

const Search = ({ search, setInput }) => {
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
          type="text"
          placeholder="Search free photos"
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
