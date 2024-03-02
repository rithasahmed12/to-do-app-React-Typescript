export type Items = {
    title:string;
    id:string;
    done: boolean;
}

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>> ;