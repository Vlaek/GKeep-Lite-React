import { FC, useState, useEffect } from "react";
import Header from "./assets/components/Header";
import KeepList from "./assets/components/KeepList";
import Modal from "./assets/components/Modal";
import Button from "./assets/components/UI/Button/Button";
import { IKeep } from "./assets/types/types";

const App: FC = () => {
    const getFromLocalStorage = (key: string) => {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        return [];
    };

    const [keeps, setKeeps] = useState<IKeep[]>(getFromLocalStorage("keeps"));
    const [showModal, setShowModal] = useState(false);
    const [fullKeep, setFullKeep] = useState<IKeep | null>(null);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        localStorage.setItem("keeps", JSON.stringify(keeps));
    }, [keeps]);

    const addKeep = (keep: IKeep) => {
        const maxId = keeps.reduce((max, keep) => {
            return keep.id > max ? keep.id : max;
        }, 0);

        keep.id = maxId + 1;

        setKeeps([...keeps, keep]);
    };

    const editKeep = (newKeep: IKeep, id: number) => {
        console.log(keeps);
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

    const setFilterKeeps = () => {
        if (!filter) return keeps;

        const filteredKeeps = keeps.filter(
            (keep) =>
                keep.title.toLowerCase().includes(filter.toLowerCase()) ||
                keep.text.toLowerCase().includes(filter.toLowerCase())
        );

        return filteredKeeps;
    };

    const filteredKeeps = setFilterKeeps();

    return (
        <>
            <Header setFilter={setFilter} />
            <Button onAdd={addKeep} keepId={keeps.length} />
            <KeepList
                keeps={filteredKeeps}
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
