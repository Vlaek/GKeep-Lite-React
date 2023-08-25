import { FC, useState } from "react";
import Header from "./assets/components/Header";
import KeepList from "./assets/components/KeepList";
import Modal from "./assets/components/Modal";
import { IKeep } from "./assets/types/types";

const defaultKeeps = [
    {
        id: 1,
        title: "Title 1",
        text: "Text text text 123123 123123123123 1231231 231 23123 3 12312 3123 123 132 1231 23123",
        color: "#a258e3",
    },
    {
        id: 2,
        title: "Title 2",
        text: "Text text text",
        color: "#2f5465",
    },
    {
        id: 3,
        title: "Title 3",
        text: "Text text text lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, exercitationem ullam consectetur et amet perspiciatis vitae tempore aspernatur? Sed ad fuga perferendis maxime voluptatibus iure harum aut inventore veritatis iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, exercitationem ullam consectetur et amet perspiciatis vitae tempore aspernatur? Sed ad fuga perferendis maxime voluptatibus iure harum aut inventore veritatis iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, exercitationem ullam consectetur et amet perspiciatis vitae tempore aspernatur? Sed ad fuga perferendis maxime voluptatibus iure harum aut inventore veritatis iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, exercitationem ullam consectetur et amet perspiciatis vitae tempore aspernatur? Sed ad fuga perferendis maxime voluptatibus iure harum aut inventore veritatis iusto.",
        color: "#6f3124",
    },
    {
        id: 4,
        title: "Title 4",
        text: "Text text text",
        color: "#214d3f",
    },
    {
        id: 5,
        title: "Title 5",
        text: "Text text text 123123 123123123123 1231231 231 23123 3 12312 3123 123 132 1231 23123 35453453453 453454545 545454 54545 54545 45 4",
        color: "#84848c",
    },
    {
        id: 6,
        title: "Title 6",
        text: "Text text text",
        color: "#2d3e51",
    },
    {
        id: 7,
        title: "Title 7",
        text: "Text text text",
        color: "#4a4039",
    },
];

const App: FC = () => {
    const [keeps, setKeeps] = useState<IKeep[]>(defaultKeeps);
    const [showModal, setShowModal] = useState(false);
    const [fullKeep, setFullKeep] = useState<IKeep | null>(null);

    const addKeep = (keep: IKeep) => {
        setKeeps([...keeps, keep]);
    };

    const editKeep = (newKeep: IKeep, id: number) => {
        setKeeps(
            keeps.map((keep) => {
                if (keep.id === id) {
                    return newKeep;
                }
                return keep;
            })
        );
    };

    const deleteKeep = (id: number) => {
        setKeeps(keeps.filter((keep) => keep.id !== id));
    };

    const setModalActive = (keep: IKeep | null) => {
        setFullKeep(keep);
        setShowModal(!showModal);
    };

    return (
        <>
            <Header />
            <KeepList
                keeps={keeps}
                onDelete={deleteKeep}
                setKeeps={setKeeps}
                setModalActive={setModalActive}
            />
            <Modal
                keep={fullKeep}
                showModal={showModal}
                editKeep={editKeep}
                addKeep={addKeep}
                setShowModal={setShowModal}
            />
        </>
    );
};

export default App;
