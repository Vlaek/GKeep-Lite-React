// import React from "react";
import { FC } from "react";
import Input from "./UI/Input/Input";

interface HeaderProps {
    setFilter: (query: string) => void;
}

const Header: FC<HeaderProps> = ({ setFilter }) => {
    return (
        <div className="header">
            <div className="header__logo">Keeps</div>
            <Input setFilter={setFilter} />
            <div></div>
        </div>
    );
};

export default Header;
