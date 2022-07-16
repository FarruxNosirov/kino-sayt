import React from "react";
import style from "../../styles/Media.module.css";

const Media = () => {
  return (
    <div className={style.Media}>
      <div id={style.container} className="container">
        <div className={style.content_wrapper}>
          <div className={style.Media_container}>
            <div className={style.title}>
              <h1>Welcome.</h1>
              <h3>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </div>

            <div className={style.search}>
              <div className={style.input_div}>
                <input
                  type="text"
                  placeholder="Search for a movie, tv show, person..."
                />
                <button type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
