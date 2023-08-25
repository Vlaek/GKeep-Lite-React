import { FC } from "react";
import { IDeleteKeep, IKeep, ISetModalActive } from "../types/types";
import { IoClose } from "react-icons/io5";

interface KeepProps {
    keeps: IKeep[];
    keep: IKeep;
    keepIndex: number;
    onDelete: IDeleteKeep;
    draggableItem: number;
    setDraggableItem: (id: number) => void;
    setKeeps: (keeps: IKeep[]) => void;
    setModalActive: ISetModalActive;
}

const Keep: FC<KeepProps> = ({
    keeps,
    keep,
    keepIndex,
    onDelete,
    draggableItem,
    setDraggableItem,
    setKeeps,
    setModalActive,
}) => {
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        (target.closest(".keep") as HTMLElement).style.boxShadow = "0 4px 3px rgba(0, 0, 0, 0.4)";
    };

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        (target.closest(".keep") as HTMLElement).style.boxShadow = "none";
    };

    const dragStartHandler = (index: number) => {
        setDraggableItem(index);
    };

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        (target.closest(".keep") as HTMLElement).style.boxShadow = "none";
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        (target.closest(".keep") as HTMLElement).style.boxShadow = "none";
        if (target.closest(".keep") as HTMLElement) {
            const draggedItem = keeps[draggableItem];
            const remainingItems = keeps.filter((_, i) => i !== draggableItem);
            const updatedItems = [
                ...remainingItems.slice(0, index),
                draggedItem,
                ...remainingItems.slice(index),
            ];
            setKeeps(updatedItems);
        }
    };

    return (
        <div
            className="keep"
            style={{ backgroundColor: keep.color }}
            draggable={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragStart={() => dragStartHandler(keepIndex)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, keepIndex)}
            onClick={() => setModalActive(keep)}
        >
            <div className="keep__title">{keep.title}</div>
            <div className="keep__text">{keep.text}</div>
            <div className="keep__footer"></div>
            <IoClose className="keep__btn-close" onClick={() => onDelete(keep.id)} />
        </div>
    );
};

export default Keep;
