import classNames from "util/classNames";

import React from "react";

import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_SIDE_MENU } from "slices/globalSlice";

import styles from "./MobileHeader.module.scss";

const menus = ["Bisiklet", "Aksesuar", "Giyim", "Fren"];

const MobileHeader = () => {
  const { openSideMenu } = useSelector((state) => state.global);

  const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      {/* MENU */}
      <div
        className={classNames(
          styles["menu-container"],
          openSideMenu ? styles.open : styles.closed
        )}
      >
        <ul>
          {menus.map((menu) => (
            <li key={menu}>
              <button
                type="button"
                className={`p-2 mb-2 w-100 text-start ${styles["menu-item"]}`}
              >
                {menu}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* HEADER */}
      <div className={styles.header__container}>
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles["header__icon-container"]}>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                dispatch(TOGGLE_SIDE_MENU());
              }}
            />
          </div>
          <img alt="logo" src="/logo.png" width={140} height={40} />
          <div className={styles["header__icon-container"]}>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
