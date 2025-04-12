export type BoardT = { id: number; name: string; description: string };

export type DroppableCardT = {
    id: number;
    name: string;
};

export type TaskCardT = {
    id: number;
    name: string;
    isCompleted?: boolean;
};
