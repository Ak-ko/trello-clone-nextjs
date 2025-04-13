import { DroppableCardT, UserT } from "@/@types/board";

export const users: UserT[] = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        image: "",
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: 3,
        name: "Charlie Lee",
        email: "charlie.lee@example.com",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 4,
        name: "Dana Scott",
        email: "dana.scott@example.com",
        image: "https://i.pravatar.cc/150?img=4",
    },
];

export const boards = [
    {
        id: 1,
        name: "Marketing",
        description: "Marketing board",
        members: users.filter((u) => u.id < 3),
    },
    {
        id: 2,
        name: "Finance",
        description: "Finance board",
        members: users.filter((u) => u.id < 2),
    },
    {
        id: 3,
        name: "Operation",
        description: "Operation board",
        members: users,
    },
    {
        id: 4,
        name: "Biomedical",
        description: "Biomedical board",
        members: users.filter((u) => u.id < 4),
    },
    {
        id: 6,
        name: "Training and Development",
        description: "Training and Development board",
        members: users.filter((u) => u.id === 1),
    },
];

export const defaultDroppableCards: DroppableCardT[] = [
    { id: 1, name: "Working On" },
];

export const defaultTasks = [{ id: 1, name: "Task 1", isCompleted: false }];
