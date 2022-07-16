import React from "react";
import { useSelector } from "react-redux";
import style from "../../styles/Leaderboard.module.css";

const Leaderboard = () => {
  const store = useSelector((state) => state.reducer.Leaderboard);
  const { leaderboard_heder, leaderboard_content } = store;

  return (
    <div className={style.Leaderboard}>
      <div className="container">
        <div className={style.Leaderboard_container}>
          <div className={style.column_header}>
            <h2>{leaderboard_heder.value}</h2>
            <div className={style.header_icon}>
              <p>
                <span></span>
                All Time Edits
              </p>
              <p>
                <span></span>
                Edits This Week
              </p>
            </div>
          </div>
          <div className={style.column_content}>
            <ol className={style.leaderboard_li}>
              {leaderboard_content.data.map((item) => {
                return (
                  <li key={item.id}>
                    <span className={style.avatar}>
                      <a className={style.round} href="u/samara">
                        {item.img_url ? (
                          <img src={item.img_url} alt="" />
                        ) : (
                          <span>{item.user_title}</span>
                        )}
                      </a>
                    </span>
                    <div className={style.data}>
                      <h3>{item.user_name}</h3>
                      <div className={`${style.meter} ${style.all}`}>
                        <div
                          style={{ width: `${item.width_1}%` }}
                          className={style.guage}
                        ></div>
                        <h4>{item.value_1}</h4>
                      </div>
                      <div className={`${style.meter} ${style.this_wek}`}>
                        <div
                          style={{ width: `${item.width_2}%` }}
                          className={style.guage}
                        ></div>
                        <h4>{item.value_2}</h4>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
