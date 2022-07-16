import React, { useState } from "react";
import style from "../../styles/Inner_content.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Inner_content = () => {
  const [click, setClick] = useState(true);
  const [isShadow, setIsShadow] = useState(false);
  const percentage = 66;
  const store = useSelector((state) => state.reducer.Innner_context);
  return (
    <div className={style.Inner_content}>
      <div className="container">
        <div className={style.inner_container}>
          <div className={style.columin}>
            <div className={style.columin_header}>
              <h2>What's Popular</h2>
              <div className={style.selector_wrap}>
                <div className={style.selector}>
                  <div className={`${style.anchar} ${style.selector_actev}`}>
                    <h3 onClick={() => setClick(true)}>
                      <a
                        style={{ color: click ? "var(--btn_color)" : "black" }}
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
                        style={{ color: click ? "black" : "var(--btn_color)" }}
                      >
                        In Theaters
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.columin_body}>
              <div
                className={style.columin_content}
                onScroll={(event) => {
                  setIsShadow(event.currentTarget.scrollLeft > 33);
                }}
              >
                <div className={!isShadow ? style.shadowEffect : "none"} />
                {store.inner_card.data.map((item) => {
                  return (
                    <div key={item.id} className={style.card}>
                      <div className={style.card_img}>
                        <div className={style.wraper_image}>
                          <Link href="/Page_wrap">
                            <a>
                              <img src={item.img_uril} alt="" />
                            </a>
                          </Link>
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
                      </div>
                      <div className={style.card_doc}>
                        <div className={style.card_doc_img}>
                          <div className={style.card_prosent}>
                            <CircularProgressbar
                              value={66}
                              text={`${percentage}%`}
                            />
                          </div>
                        </div>
                        <div className={style.card_doc_name}>
                          <h2>{item.card_name}</h2>
                          <p>{item.card_title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inner_content;
