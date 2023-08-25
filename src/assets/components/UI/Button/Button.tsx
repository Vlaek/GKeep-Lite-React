import { FC, useState, useEffect, useRef } from "react";
import { IAddKeep } from "../../../types/types";
import styles from "./button.module.scss";

interface ButtonProps {
    onAdd: IAddKeep;
    keepId: number;
}

const defaultKeep = {
    id: 0,
    title: "",
    text: "",
    color: "#282c34",
};

const Button: FC<ButtonProps> = ({ onAdd, keepId }) => {
    const [titleDisplay, setTitleDisplay] = useState(false);
    const [newKeep, setNewKeep] = useState(defaultKeep);

    const contentRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (
                contentRef.current &&
                !contentRef.current.contains(e.target as Node) &&
                titleDisplay
            ) {
                if (newKeep.title.trim() !== "" || newKeep.text.trim() !== "") {
                    newKeep.id = keepId + 1;
                    onAdd(newKeep);
                    setNewKeep(defaultKeep);
                    if (formRef.current !== null) {
                        formRef.current.reset();
                    }
                }
                setTitleDisplay(false);
            }
        };

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [keepId, newKeep, titleDisplay, onAdd]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content} ref={contentRef}>
                <form action="" className={styles.form} ref={formRef}>
                    <input
                        type="text"
                        placeholder="Title"
                        id="title"
                        value={newKeep.title}
                        onChange={(e) => {
                            setNewKeep((prevKeep) => ({
                                ...prevKeep,
                                title: e.target.value,
                            }));
                        }}
                        style={{ display: titleDisplay ? "block" : "none" }}
                    />
                    <input
                        type="text"
                        placeholder="Take a note..."
                        id="content"
                        defaultValue={newKeep.text}
                        onChange={(e) => {
                            setNewKeep((prevKeep) => ({
                                ...prevKeep,
                                text: e.target.value,
                            }));
                        }}
                        onFocus={() => setTitleDisplay(true)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Button;
