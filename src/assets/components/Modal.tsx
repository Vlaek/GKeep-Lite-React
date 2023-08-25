import { FC, useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { IAddKeep, IEditKeep, ISetModal, IKeep } from "../types/types";

interface ModalProps {
    keep: IKeep | null;
    showModal: boolean;
    setShowModal: ISetModal;
    editKeep: IEditKeep;
    addKeep: IAddKeep;
}

interface FormRefType {
    reset: () => void;
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal, keep, editKeep, addKeep }) => {
    const [newKeep, setNewKeep] = useState({
        id: keep ? keep.id : -1,
        title: keep ? keep.title : "",
        text: keep ? keep.text : "",
        color: keep ? keep.color : "#fff",
    });

    useEffect(() => {
        if (keep) setNewKeep(keep);
        if (formRef.current !== null) formRef.current.reset();
    }, [keep]);

    const formRef = useRef<FormRefType | null>(null);

    const saveKeep = () => {
        if (!keep) {
            addKeep(newKeep);
        } else {
            newKeep.id = keep.id;
            editKeep(newKeep, keep.id);
        }
    };

    const colors = [
        "#a258e3",
        "#2f5465",
        "#6f3124",
        "#214d3f",
        "#84848c",
        "#2d3e51",
        "#4a4039",
        "#282c34",
    ];

    return (
        <div
            className={showModal ? "modal active" : "modal"}
            onClick={() => {
                saveKeep();
                setShowModal(false);
            }}
        >
            <div
                className="modal__content"
                style={{ backgroundColor: newKeep.color }}
                onClick={(e) => e.stopPropagation()}
            >
                <form className="modal__form" ref={(node) => (formRef.current = node)}>
                    <div className="modal__header">
                        <input
                            className="modal__input"
                            type="text"
                            id="title"
                            placeholder="Название..."
                            defaultValue={newKeep.title}
                            onChange={(e) => {
                                newKeep.title = e.target.value;
                                saveKeep();
                            }}
                            style={{ backgroundColor: newKeep.color }}
                        />
                    </div>
                    <div className="modal__body">
                        <textarea
                            className="modal__textarea"
                            id="text"
                            placeholder="Текст..."
                            defaultValue={newKeep.text}
                            onChange={(e) => {
                                newKeep.text = e.target.value;
                                saveKeep();
                            }}
                            style={{ backgroundColor: newKeep.color }}
                        ></textarea>
                    </div>
                    <div className="modal__footer">
                        {colors.map((color) => (
                            <div
                                className="modal__color"
                                key={color}
                                style={{ backgroundColor: color }}
                                onClick={() => {
                                    newKeep.color = color;
                                    saveKeep();
                                }}
                            ></div>
                        ))}
                    </div>
                    <IoClose
                        className="modal__btn-delete"
                        onClick={() => {
                            saveKeep();
                            setShowModal(false);
                        }}
                    />
                </form>
            </div>
        </div>
    );
};

export default Modal;
