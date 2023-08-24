// import React from "react";
import { FC } from "react";
import Input from "./UI/Input/Input";

interface HeaderProps {
    // onAdd: (keep: IKeep) => void;
}

const Header: FC<HeaderProps> = () => {
    return (
        <div className="header">
            <div className="header__logo">Keeps</div>
            <Input />
            <div></div>
        </div>
    );
};

export default Header;
