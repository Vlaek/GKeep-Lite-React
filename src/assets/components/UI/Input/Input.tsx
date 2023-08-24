// import React from "react";
import styles from "./input.module.scss";
import { IoSearch, IoClose } from "react-icons/io5";

const Input = () => {
    return (
        <div className={styles.wrapper}>
            <input type="text" className={styles.input} placeholder="Найти" />
            <IoClose className={styles.input__btn_clear} />
            <IoSearch className={styles.input__btn_search} />
        </div>
    );
};

export default Input;
