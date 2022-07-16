import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "../../styles/Navbar.module.css";
import { GrBottomCorner } from "react-icons/gr";

const Navbar = ({ scrolH }) => {
  const store = useSelector((state) => state.reducer.heder);
  const { heder_logo, heder_ul } = store;
  const [clickMe, setClickMe] = useState({
    modal_1: false,
    modal_2: false,
    modal_3: false,
    modal_4: false,
  });
  const [onclicme, setOnclicMe] = useState(false);

  return (
    <div style={{ top: scrolH ? "0px" : "-64px" }} className={style.header}>
      <div className="container">
        <div className={style.content}>
          <div className={style.right_content}>
            <a href="/" className={style.logo}>
              <img src={heder_logo.img_url} alt={heder_logo.img_alt} />
            </a>
            <ul>
              {heder_ul.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="">{item.value}</a>
                    <div className={style.k_animatsion_kontainer}>
                      <ul className={style.k_gruh}>
                        {item.item_div?.data2?.map((im_2) => {
                          return (
                            <li key={im_2.id}>
                              <a href="#">{im_2.value}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.left_content}>
            <ul>
              <li className={style.add}>
                <a
                  onClick={() => setClickMe({ modal_1: !clickMe.modal_1 })}
                  href="#"
                >
                  <span>
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
                      alt=""
                    />
                  </span>
                </a>
                <div
                  style={{ display: clickMe.modal_1 ? "block" : "none" }}
                  className={style.add_div}
                >
                  <div className={style.add_div_strilka}></div>
                  <p>Add New Movie</p>
                  <p>Add New TV show</p>
                </div>
              </li>
              <li className={style.translet}>
                <div
                  onClick={() => {
                    setClickMe({ modal_2: !clickMe.modal_2 });
                  }}
                  className={style.en_translet}
                >
                  <span>en</span>
                </div>
                <div
                  style={{ display: clickMe.modal_2 ? "block" : " none" }}
                  className={style.translet_div}
                >
                  <div className={style.one}>
                    <h2>Language Preferences</h2>
                  </div>

                  <div className={style.two}>
                    <div className={style.two_1}>
                      <div className={style.two_1_h2}>
                        <h2>Default Language</h2>
                        <p>Reset</p>
                      </div>
                      <div className={style.two_1_lang}>
                        <h2>English(en-US)</h2>
                        <span>
                          <GrBottomCorner className={style.gr} />
                        </span>
                      </div>
                    </div>
                    <div className={style.two_1}>
                      <div className={style.two_1_h2}>
                        <h2>Fallback Language</h2>
                      </div>
                      <div className={style.two_1_lang}>
                        <h2>None (Don't Fallback)</h2>
                        <span>
                          <GrBottomCorner className={style.gr} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={style.glyph}>
                <a href="">
                  <span>
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-441-bell-9cd2af257b98c4af3460078777d8e38a5e12bca89704eeac2f39273afcbd06ff.svg"
                      alt=""
                    />
                  </span>
                </a>
              </li>
              <li className={style.user}>
                <div>
                  <a href="">
                    <span>F</span>
                  </a>
                </div>
              </li>
              <li className={style.search}>
                <div
                  style={{ display: onclicme ? "none" : "flex" }}
                  className={style.search_one}
                >
                  <span>
                    <img
                      onClick={() => setOnclicMe(true)}
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div
                  style={{ display: onclicme ? "flex" : "none" }}
                  className={style.search_two}
                >
                  <span>
                    <img
                      onClick={() => setOnclicMe(false)}
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-599-menu-close-7400e9a2ea92ad8d7cccf18d1ea34cd690790638a6e7768922eaef6e07109723.svg"
                      alt=""
                    />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{ width: onclicme ? "100%" : "0%" }}
        className={style.input_serach}
      >
        <div className="container">
          <div className={style.input_serach_div}>
            <div>
              <img
                style={{ width: onclicme ? "1.5rem" : "0" }}
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
                alt=""
              />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
