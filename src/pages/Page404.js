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
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>
          입력하신 주소가 잘못되었거나, 페이지가 이동 또는 삭제되었을 수 있어요.
        </p>

        <Link to="/" className="backHomeBtn">
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
};

export default Page404;
