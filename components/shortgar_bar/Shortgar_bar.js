import React from "react";
import style from "../../styles/Shortgar_bar.module.css";
import { GrBottomCorner } from "react-icons/gr";

const Shortgar_bar = () => {
  return (
    <div className={style.Shortgar_bar}>
      <div className="container">
        <ul className={style.bar_ul}>
          <li className={style.bar_ul_item}>
            <span>Overview</span>
            <GrBottomCorner className={style.GrBottomCorner} />
          </li>
          <li className={style.bar_ul_item}>
            <span>Media</span>
            <GrBottomCorner className={style.GrBottomCorner} />
          </li>
          <li className={style.bar_ul_item}>
            <span>Fandom</span>
            <GrBottomCorner className={style.GrBottomCorner} />
          </li>
          <li className={style.bar_ul_item}>
            <span>Share</span>
            <GrBottomCorner className={style.GrBottomCorner} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shortgar_bar;
