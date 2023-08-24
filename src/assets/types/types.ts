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
