import Masonry from "react-masonry-css";
import Keep from "./Keep";
import { FC, useState } from "react";
import { IDeleteKeep, IKeep, ISetModalActive } from "../types/types";

interface KeepListProps {
    keeps: IKeep[];
    onDelete: IDeleteKeep;
    setKeeps: (keeps: IKeep[]) => void;
    setModalActive: ISetModalActive;
}

const KeepList: FC<KeepListProps> = ({ keeps, onDelete, setKeeps, setModalActive }) => {
    const [draggableItem, setDraggableItem] = useState<number>(0);

    return (
        <Masonry breakpointCols={4} className="keeps-grid" columnClassName="keeps-grid__column">
            {keeps.map((keep, index) => (
                <Keep
                    keeps={keeps}
                    keep={keep}
                    keepIndex={index}
                    key={keep.id}
                    onDelete={onDelete}
                    draggableItem={draggableItem}
                    setDraggableItem={setDraggableItem}
                    setKeeps={setKeeps}
                    setModalActive={setModalActive}
                />
            ))}
        </Masonry>
    );
};

export default KeepList;
