import Link from "next/link";
import React from "react";
import style from "../../styles/Info_page.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

const Info_page = () => {
  const [like, setLike] = useState(false);
  const percentage = 64;
  return (
    <div className={style.Info_page}>
      <div className={style.Info_page_container}>
        <div className="container">
          <div className={style.single_column}>
            <div className={style.images_inner}>
              <div className={style.poster_wraper}>
                <div className={style.imga_contexs}>
                  <img
                    src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8CXbCCGiJxi4AXPBQ1QPrehMIGG.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={style.heder_poster_wraper}>
                <div className={style.heder_poster}>
                  <div className={style.title}>
                    <h2 className={style.title_name}>
                      <a href="#">Cara e Coragem</a>
                      <span> (2022)</span>
                    </h2>
                    <div className={style.facts}>
                      <span className={style.one}>12</span>
                      <span className={style.two}>
                        <a href="">Comedy, Action & Adventure, Soap</a>
                      </span>
                    </div>
                  </div>
                  <div className={style.actions}>
                    <ul className={style.actions_ul}>
                      <li className={style.chart}>
                        <div className={style.lset_prosent}>
                          <CircularProgressbar
                            className={style.lset_prosent_icon}
                            value={`${percentage}`}
                            text={`${percentage}%`}
                          />
                        </div>
                        <div className={style.text}>
                          <span>User</span>
                          <br />
                          <span>Score</span>
                        </div>
                      </li>
                      <li className={style.tooltrip}>
                        <a href="/">
                          <span
                            style={{
                              backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789.svg')`,
                            }}
                          ></span>
                        </a>
                      </li>
                      <li className={style.tooltrip}>
                        <p>
                          <span
                            onClick={() => setLike(true)}
                            style={{
                              backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e.svg')`,
                              display: like ? "none" : "flex",
                            }}
                          ></span>
                          <span
                            onClick={() => setLike(false)}
                            style={{
                              backgroundImage: `url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-selected-7d05ac729b7f41ab22db83dba29b73f81da2c0a2b1c5fc938fb333d34adf965e.svg")`,
                              display: like ? "flex" : "none",
                            }}
                          ></span>
                        </p>
                      </li>
                      <li className={style.tooltrip}>
                        <a href="">
                          <span
                            style={{
                              backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd.svg')`,
                            }}
                          ></span>
                        </a>
                      </li>
                      <li className={style.tooltrip}>
                        <a href="">
                          <span
                            style={{
                              backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa.svg')`,
                            }}
                          ></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={style.heder_info}>
                    <h3>Overview</h3>
                    <div className={style.overviw}>
                      <p>
                        We don't have an overview translated in English. Help us
                        expand our database by adding one.
                      </p>
                    </div>
                    <div className={style.people}>
                      <p>
                        <a href="">Claudia Souto</a>
                      </p>

                      <p>Creator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_page;
