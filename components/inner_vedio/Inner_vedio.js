import React, { useState } from "react";
import style from "../../styles/Inner_content.module.css";

import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

const Inner_content = () => {
  const [click, setClick] = useState(true);

  const store = useSelector((state) => state.reducer.Inner_vedio);
  return (
    <div className={style.Inner_content}>
      <div className="container">
        <div className={`${style.inner_container} ${style.inner_vedio}`}>
          <div className={style.columin}>
            <div className={style.columin_header}>
              <h2>latest Trailers</h2>
              <div className={style.selector_wrap}>
                <div className={style.selector}>
                  <div
                    className={`${style.anchar} ${style.selector_actev} ${style.anchar2}`}
                  >
                    <h3 onClick={() => setClick(true)}>
                      <a
                        style={{
                          color: click ? "var(--tmdbDarkBlue)" : "white",
                        }}
                      >
                        On tv
                      </a>
                    </h3>
                    <div
                      style={{
                        left: click ? "0px" : "80.2656px",
                        width: click ? "80.2656px" : "116.656px",
                      }}
                    ></div>
                  </div>
                  <div className={`${style.anchar} `}>
                    <h3 onClick={() => setClick(false)}>
                      <a
                        style={{
                          color: click ? "white" : "var(--tmdbDarkBlue)",
                        }}
                      >
                        In Theaters
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.columin_scroll}>
              {store.inner_card.data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`${style.card} ${style.card_vedio}`}
                  >
                    <div className={style.card_img}>
                      <div className={style.wraper_image}>
                        <a href="#">
                          <img src={item.img_uril} alt="" />
                        </a>
                      </div>
                      <div className={style.icon}>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className={style.player}>
                        <span></span>
                      </div>
                    </div>
                    <div className={style.card_wraper}>
                      <h2>Mis Marvil</h2>
                      <p>Seek</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inner_content;
