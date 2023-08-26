import Masonry from "react-masonry-css";
import Keep from "./Keep";
import { FC, useState } from "react";
import { IDeleteKeep, IKeep, ISetModalActive } from "../types/types";
import { useMediaQuery } from "react-responsive";

interface KeepListProps {
    keeps: IKeep[];
    onDelete: IDeleteKeep;
    setKeeps: (keeps: IKeep[]) => void;
    setModalActive: ISetModalActive;
}

const BREAKPOINTS = {
    desktop: "(min-width: 1400px)",
    tablet: "(min-width: 1100px)",
    mobile: "(min-width: 860px)",
};

const KeepList: FC<KeepListProps> = ({ keeps, onDelete, setKeeps, setModalActive }) => {
    const [draggableItem, setDraggableItem] = useState<number>(0);

    const isDesktop = useMediaQuery({ query: BREAKPOINTS.desktop });
    const isTablet = useMediaQuery({ query: BREAKPOINTS.tablet });
    const isMobile = useMediaQuery({ query: BREAKPOINTS.mobile });

    return (
        <Masonry
            breakpointCols={isDesktop ? 4 : isTablet ? 3 : isMobile ? 2 : 1}
            className="keeps-grid"
            columnClassName="keeps-grid__column"
        >
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
