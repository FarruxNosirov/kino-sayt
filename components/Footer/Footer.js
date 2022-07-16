import React from "react";
import style from "../../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className="container">
        <div className={style.Footer_container}>
          <div className={`${style.content} ${style.join}`}>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
            />
            <a href="https://www.themoviedb.org/u/farruxjonnosirov99">
              Hi farruxjonnosirov99!
            </a>
          </div>
          <div className={style.content}>
            <h3>The Basics</h3>
            <ul>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
            </ul>
          </div>
          <div className={style.content}>
            <h3>The Basics</h3>
            <ul>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
            </ul>
          </div>
          <div className={style.content}>
            <h3>The Basics</h3>
            <ul>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
            </ul>
          </div>
          <div className={style.content}>
            <h3>The Basics</h3>
            <ul>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB</a>
              </li>
              <li>
                <a href="">About TMDB </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
