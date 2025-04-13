import { DateRangeT } from "@/components/boards/due-date-picker";

export type BoardT = { id: number; name: string; description: string };

export type DroppableCardT = {
    id: number;
    name: string;
};

export type TaskT = {
    id: number;
    name: string;
    isCompleted?: boolean;
    dateRange?: DateRangeT;
    description?: string;
    members?: UserT[];
};

export type UserT = {
    id: number;
    name: string;
    email: string;
    image: string;
};
