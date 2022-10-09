import React from "react";

import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
// import {
//   // decrement,
//   increment
// } from 'slices/counterSlice';

const Header = () => {
  return (
    <div className={styles.header}>
      {/* HEADER */}
      <div className={styles.header__container}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link to={"/"} className="p-2">
              <img alt="logo" src="/logo.png" width={140} height={40} />
            </Link>
            <ul>
              <li>
                <Link to="/products">URUNLER</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
