import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "../../styles/Media_tv.module.css";

const Media_tv = () => {
  const store = useSelector((state) => state.reducer.Media_tv);
  const [isShadow, setIsShadow] = useState(false);
  const { media_lest, leaders_edit } = store;
  return (
    <div className={style.Media_tv}>
      <div className="container">
        <div className={style.column_wrapper}>
          <div className={style.content_wrapper}>
            <div className={style.left_container}>
              <div className={style.left_content}>
                <section className={`${style.panel} ${style.top_billed}`}>
                  <h3>Series Cast</h3>
                  <div className={style.cast_scroller}>
                    <li
                      className={!isShadow ? style.shadowEffect : "none"}
                    ></li>
                    <ol
                      onScroll={(event) => {
                        setIsShadow(event.currentTarget.scrollLeft > 33);
                      }}
                    >
                      {media_lest.data.map((item) => {
                        return (
                          <li key={item.id} className={style.card}>
                            <a href="">
                              <img
                                src="https://www.themoviedb.org/t/p/w138_and_h175_face/ndZUkcmFKw8nqkWpy8iI4uXpDij.jpg"
                                alt=""
                              />
                            </a>
                            <p className={style.card_name}>
                              <a href="">Paolla Oliveira</a>
                            </p>
                            <p className={style.card_p2}>Pat (Patrícia Lima)</p>
                            <p className={style.card_p3}>54 Episodes</p>
                          </li>
                        );
                      })}
                      <li className={`${style.card} ${style.card_fot}`}>
                        <p>
                          <a href="">
                            <span>View More </span>
                            <img
                              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-830-arrow-thin-right-5c2f4e65afc985448cd9042f9d64426f1e002fbd3c2546053d190fa27f77600f.svg"
                              alt=""
                            />
                          </a>
                        </p>
                      </li>
                    </ol>
                  </div>
                  <p className={style.new_btn}>
                    <a href="">Full Cast & Crew</a>
                  </p>
                </section>
                <section className={style.Season}>
                  <div className={style.season_title}>
                    <h3>
                      <bdi>Current Season</bdi>
                    </h3>
                  </div>
                  <div className={style.season_card}>
                    <div className={style.flexs}>
                      <a href="" className={style.poster}>
                        <img
                          src="https://www.themoviedb.org/t/p/w130_and_h195_bestv2/8CXbCCGiJxi4AXPBQ1QPrehMIGG.jpg"
                          alt=""
                        />
                      </a>
                      <div className={style.content}>
                        <div>
                          <h2>
                            <a href="">Season 1</a>
                          </h2>
                          <h4>2022 | 54 Episodes</h4>
                          <div className={style.sesson}>
                            <p>
                              Season 1 of Cara e Coragem premiered on May 30,
                              2022.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className={style.new_btn}>
                    <a href="">View All Seasons</a>
                  </p>
                </section>
                <section className={style.media_panel}>
                  <section className={style.reviwe}>
                    <div className={style.menu}>
                      <h3>Social</h3>
                      <ul>
                        <li className={style.acteve}>
                          <a href="" className={style.Reviews}>
                            Reviews <span>0</span>
                          </a>
                        </li>
                        <li className={style.auto}>
                          <a href="" className={style.Discussions}>
                            Discussions
                            <span>0</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={style.content}>
                      <p>
                        We don't have any reviews for Cara e Coragem. Would you
                        like to write one
                      </p>
                    </div>
                  </section>
                </section>
                <section className={style.media_panel}>
                  <div className={style.menu}>
                    <h3>Media</h3>
                    <ul>
                      <li className={style.acteve}>
                        <a href="" className={style.Reviews}>
                          Most Popular <span>0</span>
                        </a>
                      </li>
                      <li className={style.auto}>
                        <a href="" className={style.Discussions}>
                          Videos
                          <span>0</span>
                        </a>
                      </li>
                      <li className={style.auto}>
                        <a href="" className={style.Discussions}>
                          Backdrops
                          <span>3</span>
                        </a>
                      </li>
                      <li className={style.auto}>
                        <a href="" className={style.Discussions}>
                          Posters
                          <span>1</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={style.media_scroller}>
                    <div className={style.content_scroller}>
                      <div className={style.becground}>
                        <img
                          src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/5y2sHlCndnEZC6MjkJ4w40WFzo5.jpg"
                          alt=""
                        />
                      </div>
                      <div className={style.poster}>
                        <img
                          src="https://www.themoviedb.org/t/p/w220_and_h330_face/8BzuwDAMamf5TX4TepbDDEq7ima.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className={style.recommendations}>
                  <div className={style.recommendations_woypoint}>
                    <h3>Recommendations</h3>
                    <div className={style.recommendations_scroller}>
                      <div className={style.scroller}>
                        <div className={style.item}>
                          <div className={style.item_img}>
                            <a href="">
                              <img
                                src="https://www.themoviedb.org/t/p/w250_and_h141_face/5uAdtSjJVZ3YYlqFnCbgaPizGnE.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <p className={style.tv_flex}>
                            <a href="">
                              <bdi>My Binondo Girl</bdi>
                            </a>
                            <span>75%</span>
                          </p>
                        </div>
                        <div className={style.item}>
                          <div className={style.item_img}>
                            <a href="">
                              <img
                                src="https://www.themoviedb.org/t/p/w250_and_h141_face/5uAdtSjJVZ3YYlqFnCbgaPizGnE.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <p className={style.tv_flex}>
                            <a href="">
                              <bdi>My Binondo Girl</bdi>
                            </a>
                            <span>75%</span>
                          </p>
                        </div>
                        <div className={style.item}>
                          <div className={style.item_img}>
                            <a href="">
                              <img
                                src="https://www.themoviedb.org/t/p/w250_and_h141_face/5uAdtSjJVZ3YYlqFnCbgaPizGnE.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <p className={style.tv_flex}>
                            <a href="">
                              <bdi>My Binondo Girl</bdi>
                            </a>
                            <span>75%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className={style.right_container}>
              <div>
                <section className={style.split_column}>
                  <div>
                    <div className={style.column_no_btn}>
                      <section className={style.facts}>
                        <h4>
                          <bdi>Facts</bdi>
                        </h4>
                        <p className={style.facts_one}>
                          <strong>
                            <bdi>Status</bdi>
                          </strong>
                          Returning Series
                        </p>
                        <p className={style.no_btn_bot}>
                          <strong>
                            <bdi>Networks</bdi>
                          </strong>
                        </p>
                        <ul className={style.facts_two}>
                          <li>
                            <a href="">
                              <img
                                src="https://www.themoviedb.org/t/p/h30/gVinXXdpdbLHuXTUUfx4R9PyuPB.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                                src="https://www.themoviedb.org/t/p/h30/xal22lPb7A1c1FQoYdHzpOm37Kf.png"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                        <p className={style.facts_three}>
                          <strong>
                            <bdi>Type</bdi>
                          </strong>
                          Scripted
                        </p>
                        <p className={style.facts_four}>
                          <strong>
                            <bdi>Original Language</bdi>
                          </strong>
                          Tagalog
                        </p>
                      </section>
                      <section className={style.keywords}>
                        <h4>
                          <bdi>Keywords</bdi>
                        </h4>
                        <ul>
                          <li>
                            <a className={style.rounded} href="">
                              romantic comedy
                            </a>
                          </li>
                          <li>
                            <a className={style.rounded} href="">
                              sneezing
                            </a>
                          </li>
                          <li>
                            <a className={style.rounded} href="">
                              allergic to cologne
                            </a>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                  <div>
                    <div className={style.right_column}>
                      <section className={style.content_14}>
                        <h4>Content Score</h4>
                        <div className={style.content_score}>
                          <div>
                            <p>90</p>
                          </div>
                        </div>
                        <p>Almost there...</p>
                      </section>
                      <section className={style.leaderboard}>
                        <h4>Top Contributors</h4>
                        <div className={style.leaders}>
                          {leaders_edit.data.map((elemn) => {
                            return (
                              <div
                                key={elemn.id}
                                className={style.leaders_edit}
                              >
                                <div className={style.acatar}>
                                  <a href="">
                                    {elemn.img_url ? (
                                      <img src={elemn.img_url} alt="" />
                                    ) : (
                                      <span>M</span>
                                    )}
                                  </a>
                                </div>
                                <div className={style.info}>
                                  <p>
                                    <span>145</span>
                                    <br />
                                    <a href="">miamitv</a>
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                          <p>
                            <a href=""> View Edit History</a>
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div>
                    <p className={style.new_button}>
                      <a href="">edit page</a>
                    </p>
                  </div>
                  <div className={style.keyboard_shortcut_text}>
                    <p>
                      <a href="">
                        <span></span>
                        Keyboard Shortcuts
                      </a>
                    </p>
                  </div>
                  <div className={style.report_issue}>
                    <p>
                      <a href="">
                        <span></span>
                        Report an Issue
                      </a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media_tv;
