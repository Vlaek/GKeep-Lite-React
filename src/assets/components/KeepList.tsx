import Masonry from "react-masonry-css";
import Keep from "./Keep";
import { FC, useState } from "react";
import { IDeleteKeep, IEditKeep, IKeep } from "../types/types";

interface KeepListProps {
    keeps: IKeep[];
    onEdit: IEditKeep;
    onDelete: IDeleteKeep;
    setKeeps: (keeps: IKeep[]) => void;
}

const KeepList: FC<KeepListProps> = ({ keeps, onEdit, onDelete, setKeeps }) => {
    const [draggableItem, setDraggableItem] = useState<number>(0);

    return (
        <Masonry breakpointCols={4} className="keeps-grid" columnClassName="keeps-grid__column">
            {keeps.map((keep, index) => (
                <Keep
                    keeps={keeps}
                    keep={keep}
                    keepIndex={index}
                    key={keep.id}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    draggableItem={draggableItem}
                    setDraggableItem={setDraggableItem}
                    setKeeps={setKeeps}
                />
            ))}
        </Masonry>
    );
};

export default KeepList;
