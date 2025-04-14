import { CommentT, DroppableCardT, UserT } from "@/@types/board";

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
        members: [],
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

export const comments: CommentT[] = [
    {
        content: "This is great, thanks for sharing!",
        member: users[0],
        createdAt: "2025-04-13T10:00:00Z",
    },
    {
        content: "Can you explain a bit more about this part?",
        member: users[1],
        createdAt: "2025-04-13T10:05:00Z",
    },
    {
        content: "I totally agree with your point.",
        member: users[2],
        createdAt: "2025-04-13T10:10:00Z",
    },
    {
        content: "Nice work, really appreciate the effort.",
        member: users[3],
        createdAt: "2025-04-13T10:15:00Z",
    },
    {
        content: "Interesting perspective, I hadn’t considered that.",
        member: users[0],
        createdAt: "2025-04-13T10:20:00Z",
    },
    {
        content: "What do you think about the alternative approach?",
        member: users[1],
        createdAt: "2025-04-13T10:25:00Z",
    },
    {
        content: "Looking forward to more updates on this!",
        member: users[2],
        createdAt: "2025-04-13T10:30:00Z",
    },
    {
        content: "I tried this and it worked perfectly.",
        member: users[3],
        createdAt: "2025-04-13T10:35:00Z",
    },
    {
        content: "Could you provide an example for this?",
        member: users[0],
        createdAt: "2025-04-13T10:40:00Z",
    },
    {
        content: "Let’s discuss this in the next meeting.",
        member: users[2],
        createdAt: "2025-04-13T10:45:00Z",
    },
    {
        content: "Very clear explanation, well done.",
        member: users[1],
        createdAt: "2025-04-13T10:50:00Z",
    },
    {
        content: "I’ve added this to my notes.",
        member: users[3],
        createdAt: "2025-04-13T10:55:00Z",
    },
    {
        content: "Mind if I use this in my project?",
        member: users[0],
        createdAt: "2025-04-13T11:00:00Z",
    },
];
