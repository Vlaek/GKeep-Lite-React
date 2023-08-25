export interface IKeep {
    id: number;
    title: string;
    text: string;
    color: string;
}

export interface IAddKeep {
    (keep: IKeep): void;
}

export interface IEditKeep {
    (keep: IKeep, id: number): void;
}

export interface IDeleteKeep {
    (id: number): void;
}

export interface ISetModal {
    (modal: boolean): void;
}

export interface ISetModalActive {
    (task: IKeep | null): void;
}
