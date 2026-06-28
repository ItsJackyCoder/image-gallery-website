import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import homepageIcon from "./assets/homepage.png";
import titleIcon from "./assets/image-gallery.png";

const Layout = () => {
  return (
    <div>
      <nav>
        <div className="titleArea">
          <img src={titleIcon} alt="" width="50px" height="50px" />

          <h1 aria-label="Title" title="Title">
            {"    "}
            Image Gallery
          </h1>
        </div>

        <ul>
          <li>
            <Link to="/" className="homeLink" aria-label="Home" title="Home">
              <img src={homepageIcon} alt="" width="35px" height="35px" />
            </Link>
          </li>

          <li>
            <Link to="/favorite">찜한 사진</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
