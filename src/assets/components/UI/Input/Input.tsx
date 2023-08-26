import React, { ForwardedRef } from "react";
import styles from "./input.module.scss";
import { IoSearch, IoClose } from "react-icons/io5";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    setFilter: (query: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ setFilter }, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <div className={styles.wrapper}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Найти"
                    onChange={(e) => {
                        setFilter(e.target.value);
                    }}
                    ref={ref}
                />
                <IoClose
                    className={styles.input__btn_clear}
                    onMouseDown={(e) => {
                        setFilter("");
                        const input = (e.target as HTMLButtonElement)
                            .previousElementSibling as HTMLInputElement;
                        if (input) {
                            input.value = "";
                        }
                    }}
                />
                <IoSearch className={styles.input__btn_search} />
            </div>
        );
    }
);

export default Input;
