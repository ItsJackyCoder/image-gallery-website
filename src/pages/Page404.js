import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="page404">
      {/* 背景相框,不會擋到按鈕點擊 */}
      <div className="brokenFrameBg" aria-hidden="true">
        <span className="crack crackMain"></span>
        <span className="crack crackTopRight"></span>
        <span className="crack crackTopLeft"></span>
        <span className="crack crackBottomRight"></span>
        <span className="crack crackLeftFork"></span>
        <span className="crack crackBottomFork"></span>
        <span className="crack crackTopFork"></span>
      </div>

      {/* 真正顯示在前面的內容 */}
      <div className="page404Content">
        <p className="errorCode">404</p>
        <h2>Photo not found</h2>
        <p>Oops! The page you are looking for does not exist.</p>

        <Link to="/" className="backHomeBtn">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default Page404;
