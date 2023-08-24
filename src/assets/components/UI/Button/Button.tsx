import { FC } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    // onAdd: (keep: IKeep) => void;
}

const Button: FC<ButtonProps> = () => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button}>Создать</button>
        </div>
    );
};

export default Button;
